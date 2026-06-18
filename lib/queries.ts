import { prisma } from "@/lib/prisma";
import type {
  KnowledgeSearchParams,
  KnowledgeSort,
  StakeholderType,
  ThemeSlug
} from "@/lib/types";

const KNOWLEDGE_PAGE_SIZE = 12;

export async function getHomepageData() {
  const [themes, stakeholders, featuredPublications, stats] = await Promise.all([
    prisma.theme.findMany({
      orderBy: { name: "asc" },
      include: {
        _count: {
          select: {
            publications: true,
            projects: true
          }
        }
      }
    }),
    prisma.stakeholder.findMany({
      orderBy: { name: "asc" }
    }),
    prisma.publication.findMany({
      take: 4,
      orderBy: [{ featured: "desc" }, { publishedAt: "desc" }],
      include: {
        theme: true,
        tags: true
      }
    }),
    getPlatformStats()
  ]);

  return { themes, stakeholders, featuredPublications, stats };
}

export async function getPlatformStats() {
  const [publicationCount, projectCount, partnerCount, provinceRows] =
    await Promise.all([
      prisma.publication.count(),
      prisma.project.count(),
      prisma.organization.count(),
      prisma.project.findMany({
        distinct: ["province"],
        select: { province: true }
      })
    ]);

  return [
    { label: "Publications", value: `${publicationCount}+` },
    { label: "Projects", value: `${projectCount}+` },
    { label: "Partners", value: `${partnerCount}+` },
    { label: "Provinces", value: `${provinceRows.length}+` }
  ];
}

export async function getKnowledgePageData(filters: KnowledgeSearchParams) {
  const currentPage = Number.parseInt(filters.page ?? "1", 10) || 1;
  const where = {
    ...(filters.q
      ? {
          OR: [
            { title: { contains: filters.q } },
            { summary: { contains: filters.q } },
            { organization: { name: { contains: filters.q } } },
            { tags: { some: { name: { contains: filters.q } } } }
          ]
        }
      : {}),
    ...(filters.theme ? { theme: { slug: filters.theme } } : {}),
    ...(filters.type ? { type: filters.type } : {}),
    ...(filters.tag ? { tags: { some: { slug: filters.tag } } } : {}),
    ...buildPublishedAtWhere(filters.year, filters.from, filters.to)
  };

  const [publications, totalCount, themes, tags, years] = await Promise.all([
    prisma.publication.findMany({
      where,
      orderBy: buildKnowledgeSort(filters.sort),
      skip: (currentPage - 1) * KNOWLEDGE_PAGE_SIZE,
      take: KNOWLEDGE_PAGE_SIZE,
      include: {
        theme: true,
        organization: true,
        tags: {
          orderBy: {
            name: "asc"
          }
        }
      }
    }),
    prisma.publication.count({ where }),
    prisma.theme.findMany({
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        slug: true
      }
    }),
    prisma.tag.findMany({
      orderBy: { name: "asc" },
      select: {
        id: true,
        name: true,
        slug: true
      }
    }),
    prisma.publication.findMany({
      where: {
        publishedAt: {
          not: null
        }
      },
      orderBy: { publishedAt: "desc" },
      select: { publishedAt: true }
    })
  ]);

  return {
    publications,
    pagination: {
      page: currentPage,
      pageSize: KNOWLEDGE_PAGE_SIZE,
      totalCount,
      totalPages: Math.max(1, Math.ceil(totalCount / KNOWLEDGE_PAGE_SIZE))
    },
    filters: {
      themes,
      tags,
      years: Array.from(
        new Set(
          years
            .map((item) => item.publishedAt?.getFullYear().toString())
            .filter((year): year is string => Boolean(year))
        )
      )
    }
  };
}

export async function getThemeDetail(slug: ThemeSlug) {
  return prisma.theme.findUnique({
    where: { slug },
    include: {
      publications: {
        take: 6,
        orderBy: [{ featured: "desc" }, { publishedAt: "desc" }],
        include: {
          organization: true,
          tags: true
        }
      },
      projects: {
        take: 4,
        orderBy: [{ status: "asc" }, { startDate: "desc" }]
      },
      policies: {
        take: 4,
        orderBy: { publishedAt: "desc" }
      },
      experts: {
        take: 4
      },
      events: {
        take: 4,
        orderBy: { eventDate: "desc" }
      },
      _count: {
        select: {
          publications: true,
          projects: true,
          policies: true
        }
      }
    }
  });
}

export async function getStakeholderDetail(type: StakeholderType) {
  const stakeholder = await prisma.stakeholder.findUnique({
    where: { type },
    include: {
      publications: {
        take: 8,
        orderBy: [{ featured: "desc" }, { publishedAt: "desc" }],
        include: {
          theme: true,
          organization: true,
          tags: true
        }
      },
      projects: {
        take: 4,
        orderBy: [{ status: "asc" }, { startDate: "desc" }],
        include: {
          theme: true
        }
      }
    }
  });

  if (!stakeholder) {
    return null;
  }

  const policyBriefs = await prisma.publication.findMany({
    where: {
      type: "POLICY_BRIEF",
      stakeholders: {
        some: {
          id: stakeholder.id
        }
      }
    },
    take: 4,
    orderBy: [{ featured: "desc" }, { publishedAt: "desc" }],
    include: {
      theme: true,
      organization: true,
      tags: true
    }
  });

  return {
    ...stakeholder,
    policyBriefs
  };
}

function buildKnowledgeSort(sort: KnowledgeSort | undefined) {
  switch (sort) {
    case "newest":
      return [{ publishedAt: "desc" as const }, { title: "asc" as const }];
    case "oldest":
      return [{ publishedAt: "asc" as const }, { title: "asc" as const }];
    case "title-asc":
      return [{ title: "asc" as const }];
    case "featured":
    default:
      return [
        { featured: "desc" as const },
        { publishedAt: "desc" as const },
        { title: "asc" as const }
      ];
  }
}

function buildPublishedAtWhere(year?: string, from?: string, to?: string) {
  if (!year && !from && !to) {
    return {};
  }

  const publishedAt: { gte?: Date; lte?: Date } = {};

  if (year) {
    publishedAt.gte = new Date(`${year}-01-01T00:00:00.000Z`);
    publishedAt.lte = new Date(`${year}-12-31T23:59:59.999Z`);
  }

  if (from) {
    publishedAt.gte = new Date(`${from}T00:00:00.000Z`);
  }

  if (to) {
    publishedAt.lte = new Date(`${to}T23:59:59.999Z`);
  }

  return { publishedAt };
}

export async function getProjects() {
  return prisma.project.findMany({
    orderBy: [{ status: "asc" }, { startDate: "desc" }],
    include: {
      theme: true,
      stakeholders: true,
      impacts: true
    }
  });
}

export async function getImpactHighlights() {
  const projects = await prisma.project.findMany({
    include: {
      impacts: true,
      theme: true
    }
  });

  const totals = projects.flatMap((project) => project.impacts).reduce(
    (acc, impact) => {
      if (impact.metric === "CO2 Reduction") acc.co2 += impact.value;
      if (impact.metric === "Energy Savings") acc.energy += impact.value;
      if (impact.metric === "Beneficiaries") acc.beneficiaries += impact.value;
      return acc;
    },
    { co2: 0, energy: 0, beneficiaries: 0 }
  );

  return {
    totals,
    projects
  };
}
