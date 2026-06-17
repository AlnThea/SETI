import { prisma } from "@/lib/prisma";
import type { StakeholderType, ThemeSlug } from "@/lib/types";

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
        theme: true
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

export async function getKnowledgePageData(search?: string) {
  return prisma.publication.findMany({
    where: search
      ? {
          OR: [
            { title: { contains: search } },
            { summary: { contains: search } },
            { organization: { name: { contains: search } } }
          ]
        }
      : undefined,
    orderBy: [{ featured: "desc" }, { publishedAt: "desc" }],
    include: {
      theme: true,
      organization: true
    }
  });
}

export async function getThemeDetail(slug: ThemeSlug) {
  return prisma.theme.findUnique({
    where: { slug },
    include: {
      publications: {
        take: 6,
        orderBy: [{ featured: "desc" }, { publishedAt: "desc" }],
        include: {
          organization: true
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
  return prisma.stakeholder.findUnique({
    where: { type },
    include: {
      publications: {
        take: 6,
        orderBy: [{ featured: "desc" }, { publishedAt: "desc" }],
        include: {
          theme: true,
          organization: true
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
