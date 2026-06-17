import { PrismaClient, ProjectStatus, PublicationType } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.impact.deleteMany();
  await prisma.project.deleteMany();
  await prisma.publication.deleteMany();
  await prisma.policy.deleteMany();
  await prisma.event.deleteMany();
  await prisma.expert.deleteMany();
  await prisma.organization.deleteMany();
  await prisma.stakeholder.deleteMany();
  await prisma.theme.deleteMany();

  const [seti, iesr, gggi] = await Promise.all([
    prisma.organization.create({
      data: {
        name: "SETI",
        description: "Sustainable Energy Transition Indonesia"
      }
    }),
    prisma.organization.create({
      data: {
        name: "IESR",
        description: "Institute for Essential Services Reform"
      }
    }),
    prisma.organization.create({
      data: {
        name: "GGGI",
        description: "Global Green Growth Institute"
      }
    })
  ]);

  const themes = await Promise.all([
    prisma.theme.create({
      data: {
        name: "Industrial Decarbonization",
        slug: "industrial-decarbonization",
        description:
          "Evidence and implementation pathways for lowering industrial energy intensity and process emissions in cement, steel, and manufacturing clusters.",
        color: "#0B6B4A"
      }
    }),
    prisma.theme.create({
      data: {
        name: "Green Buildings",
        slug: "green-buildings",
        description:
          "Knowledge on energy-efficient buildings, retrofits, building codes, and demonstration facilities in urban growth centers.",
        color: "#0A5EA8"
      }
    }),
    prisma.theme.create({
      data: {
        name: "Sustainable Energy Finance",
        slug: "sustainable-energy-finance",
        description:
          "Financial instruments, blended finance, and market activation approaches supporting clean energy deployment.",
        color: "#F5B800"
      }
    }),
    prisma.theme.create({
      data: {
        name: "Energy Policy",
        slug: "energy-policy",
        description:
          "Policy reforms, regulatory roadmaps, and governance practices advancing a practical national transition agenda.",
        color: "#1E4A6B"
      }
    })
  ]);

  const stakeholders = await Promise.all([
    prisma.stakeholder.create({
      data: {
        name: "Policymaker",
        type: "policymaker",
        description: "Policy briefs, market evidence, and implementation feedback loops.",
        guidance:
          "Prioritize resources with policy relevance, measurable implementation outcomes, and region-specific adoption barriers."
      }
    }),
    prisma.stakeholder.create({
      data: {
        name: "Industry",
        type: "industry",
        description: "Operational decarbonization guidance and investable transition cases.",
        guidance:
          "Focus on sector benchmarks, retrofit playbooks, demonstration projects, and financing structures with credible payback assumptions."
      }
    }),
    prisma.stakeholder.create({
      data: {
        name: "Researcher",
        type: "researcher",
        description: "Primary studies, datasets, and evidence synthesis across themes.",
        guidance:
          "Start from methodology-heavy reports and case studies with replicable assumptions and clear data provenance."
      }
    }),
    prisma.stakeholder.create({
      data: {
        name: "Financial Institution",
        type: "financial-institution",
        description: "Pipeline visibility, risk framing, and transition finance evidence.",
        guidance:
          "Use the finance-oriented materials to assess policy stability, pipeline maturity, and replicable blended finance structures."
      }
    }),
    prisma.stakeholder.create({
      data: {
        name: "Media",
        type: "media",
        description: "Clear storylines, evidence-backed summaries, and public-interest angles.",
        guidance:
          "Start with concise reports, impact snapshots, and project stories that translate technical work into public outcomes."
      }
    })
  ]);

  const themeMap = Object.fromEntries(themes.map((theme) => [theme.slug, theme]));
  const stakeholderMap = Object.fromEntries(
    stakeholders.map((stakeholder) => [stakeholder.type, stakeholder])
  );

  await Promise.all([
    prisma.expert.createMany({
      data: [
        {
          name: "Dewi Pranoto",
          role: "Industrial energy systems specialist",
          organization: "SETI",
          themeId: themeMap["industrial-decarbonization"].id
        },
        {
          name: "Rafi Alamsyah",
          role: "Green building policy advisor",
          organization: "GGGI",
          themeId: themeMap["green-buildings"].id
        },
        {
          name: "Mira Wibisana",
          role: "Transition finance analyst",
          organization: "IESR",
          themeId: themeMap["sustainable-energy-finance"].id
        },
        {
          name: "Nadia Harsono",
          role: "Energy governance researcher",
          organization: "SETI",
          themeId: themeMap["energy-policy"].id
        }
      ]
    }),
    prisma.event.createMany({
      data: [
        {
          title: "Industrial Heat Decarbonization Roundtable",
          eventDate: new Date("2025-09-18"),
          location: "Jakarta",
          themeId: themeMap["industrial-decarbonization"].id
        },
        {
          title: "Municipal Green Buildings Forum",
          eventDate: new Date("2025-11-05"),
          location: "Bandung",
          themeId: themeMap["green-buildings"].id
        },
        {
          title: "Transition Finance Market Dialogue",
          eventDate: new Date("2025-08-14"),
          location: "Jakarta",
          themeId: themeMap["sustainable-energy-finance"].id
        },
        {
          title: "Electricity Reform Policy Workshop",
          eventDate: new Date("2025-10-02"),
          location: "Surabaya",
          themeId: themeMap["energy-policy"].id
        }
      ]
    }),
    prisma.policy.createMany({
      data: [
        {
          title: "Industrial Electrification Acceleration Note",
          slug: "industrial-electrification-acceleration-note",
          summary: "Policy note on electrification barriers and incentives.",
          publishedAt: new Date("2025-02-12"),
          themeId: themeMap["industrial-decarbonization"].id
        },
        {
          title: "Municipal Building Efficiency Regulation Review",
          slug: "municipal-building-efficiency-regulation-review",
          summary: "Review of local building efficiency provisions.",
          publishedAt: new Date("2025-03-04"),
          themeId: themeMap["green-buildings"].id
        },
        {
          title: "Blended Finance Design for Distributed Solar",
          slug: "blended-finance-design-for-distributed-solar",
          summary: "Policy framing for concessional capital and risk sharing.",
          publishedAt: new Date("2025-01-21"),
          themeId: themeMap["sustainable-energy-finance"].id
        },
        {
          title: "National Transition Governance Roadmap",
          slug: "national-transition-governance-roadmap",
          summary: "Governance sequencing across institutions and sectors.",
          publishedAt: new Date("2025-04-19"),
          themeId: themeMap["energy-policy"].id
        }
      ]
    })
  ]);

  const publications = await Promise.all([
    prisma.publication.create({
      data: {
        title: "Decarbonizing Industrial Heat in Java's Manufacturing Belt",
        slug: "decarbonizing-industrial-heat-java-manufacturing-belt",
        summary:
          "An implementation-focused report on low-temperature heat electrification, fuel switching, and phased efficiency upgrades for medium and large manufacturers.",
        type: PublicationType.REPORT,
        featured: true,
        publishedAt: new Date("2025-05-06"),
        organizationName: seti.name,
        themeId: themeMap["industrial-decarbonization"].id,
        organizationId: seti.id,
        stakeholders: {
          connect: [
            { id: stakeholderMap.policymaker.id },
            { id: stakeholderMap.industry.id },
            { id: stakeholderMap.researcher.id }
          ]
        }
      }
    }),
    prisma.publication.create({
      data: {
        title: "Retrofit Playbook for Energy-Efficient Public Buildings",
        slug: "retrofit-playbook-energy-efficient-public-buildings",
        summary:
          "A practical toolkit for municipal retrofits covering audits, procurement packages, implementation governance, and post-retrofit verification.",
        type: PublicationType.TOOLKIT,
        featured: true,
        publishedAt: new Date("2025-03-11"),
        organizationName: gggi.name,
        themeId: themeMap["green-buildings"].id,
        organizationId: gggi.id,
        stakeholders: {
          connect: [
            { id: stakeholderMap.policymaker.id },
            { id: stakeholderMap.industry.id },
            { id: stakeholderMap.media.id }
          ]
        }
      }
    }),
    prisma.publication.create({
      data: {
        title: "Catalyzing Transition Finance for Commercial Rooftop Solar",
        slug: "catalyzing-transition-finance-commercial-rooftop-solar",
        summary:
          "Policy brief on credit enhancement, debt aggregation, and pipeline preparation to unlock commercial solar finance in secondary cities.",
        type: PublicationType.POLICY_BRIEF,
        featured: true,
        publishedAt: new Date("2025-04-02"),
        organizationName: iesr.name,
        themeId: themeMap["sustainable-energy-finance"].id,
        organizationId: iesr.id,
        stakeholders: {
          connect: [
            { id: stakeholderMap["financial-institution"].id },
            { id: stakeholderMap.policymaker.id },
            { id: stakeholderMap.researcher.id }
          ]
        }
      }
    }),
    prisma.publication.create({
      data: {
        title: "Tracking Policy-to-Implementation Gaps in Indonesia's Power Transition",
        slug: "tracking-policy-to-implementation-gaps-power-transition",
        summary:
          "Case-study article showing where national policy signals diverge from provincial execution and utility readiness.",
        type: PublicationType.CASE_STUDY,
        featured: true,
        publishedAt: new Date("2025-02-28"),
        organizationName: seti.name,
        themeId: themeMap["energy-policy"].id,
        organizationId: seti.id,
        stakeholders: {
          connect: [
            { id: stakeholderMap.policymaker.id },
            { id: stakeholderMap.media.id },
            { id: stakeholderMap.researcher.id }
          ]
        }
      }
    }),
    prisma.publication.create({
      data: {
        title: "Industrial Demand Response for Low-Carbon Grid Flexibility",
        slug: "industrial-demand-response-low-carbon-grid-flexibility",
        summary:
          "Article on load-shifting opportunities and procurement models for flexible industrial demand in priority regions.",
        type: PublicationType.ARTICLE,
        publishedAt: new Date("2024-11-09"),
        organizationName: seti.name,
        themeId: themeMap["industrial-decarbonization"].id,
        organizationId: seti.id,
        stakeholders: {
          connect: [{ id: stakeholderMap.industry.id }]
        }
      }
    }),
    prisma.publication.create({
      data: {
        title: "Green Leasing Mechanisms for Commercial Office Retrofits",
        slug: "green-leasing-mechanisms-commercial-office-retrofits",
        summary:
          "Report on aligning landlord-tenant incentives to accelerate efficient equipment replacement in premium office stock.",
        type: PublicationType.REPORT,
        publishedAt: new Date("2024-10-20"),
        organizationName: gggi.name,
        themeId: themeMap["green-buildings"].id,
        organizationId: gggi.id,
        stakeholders: {
          connect: [
            { id: stakeholderMap.industry.id },
            { id: stakeholderMap["financial-institution"].id }
          ]
        }
      }
    })
  ]);

  const projects = await Promise.all([
    prisma.project.create({
      data: {
        title: "Low-Carbon Steam Systems for Food Manufacturing in West Java",
        slug: "low-carbon-steam-systems-food-manufacturing-west-java",
        description:
          "A cluster-based retrofit program combining waste-heat recovery, electrified boilers, and energy management support for mid-sized food processors.",
        province: "West Java",
        location: "Bekasi and Karawang",
        status: ProjectStatus.ACTIVE,
        impactHeadline:
          "Projected to cut fossil fuel use across six facilities while building a bankable retrofit pipeline.",
        startDate: new Date("2024-06-01"),
        themeId: themeMap["industrial-decarbonization"].id,
        stakeholders: {
          connect: [
            { id: stakeholderMap.industry.id },
            { id: stakeholderMap.policymaker.id }
          ]
        },
        impacts: {
          create: [
            {
              metric: "CO2 Reduction",
              value: 18250,
              unit: "tCO2e",
              measuredAt: new Date("2025-05-01")
            },
            {
              metric: "Energy Savings",
              value: 24500,
              unit: "MWh",
              measuredAt: new Date("2025-05-01")
            }
          ]
        }
      }
    }),
    prisma.project.create({
      data: {
        title: "Bandung Municipal Buildings Efficiency Accelerator",
        slug: "bandung-municipal-buildings-efficiency-accelerator",
        description:
          "Retrofit and commissioning support for public buildings, including district offices, schools, and service counters.",
        province: "West Java",
        location: "Bandung",
        status: ProjectStatus.ACTIVE,
        impactHeadline:
          "Created a replicable public-building retrofit package with verified savings and procurement templates.",
        startDate: new Date("2024-04-12"),
        themeId: themeMap["green-buildings"].id,
        stakeholders: {
          connect: [
            { id: stakeholderMap.policymaker.id },
            { id: stakeholderMap.media.id }
          ]
        },
        impacts: {
          create: [
            {
              metric: "Energy Savings",
              value: 9600,
              unit: "MWh",
              measuredAt: new Date("2025-04-15")
            },
            {
              metric: "Beneficiaries",
              value: 120000,
              unit: "people",
              measuredAt: new Date("2025-04-15")
            }
          ]
        }
      }
    }),
    prisma.project.create({
      data: {
        title: "Commercial Solar Credit Enhancement Facility",
        slug: "commercial-solar-credit-enhancement-facility",
        description:
          "Pipeline development and risk-sharing structure for distributed solar projects serving commercial facilities in Jakarta and Surabaya.",
        province: "DKI Jakarta",
        location: "Jakarta",
        status: ProjectStatus.PLANNING,
        impactHeadline:
          "Preparing an investable project bundle that can reduce first-mover financing friction for commercial buyers.",
        startDate: new Date("2025-01-10"),
        themeId: themeMap["sustainable-energy-finance"].id,
        stakeholders: {
          connect: [
            { id: stakeholderMap["financial-institution"].id },
            { id: stakeholderMap.industry.id }
          ]
        },
        impacts: {
          create: [
            {
              metric: "CO2 Reduction",
              value: 8400,
              unit: "tCO2e",
              measuredAt: new Date("2025-05-10")
            }
          ]
        }
      }
    }),
    prisma.project.create({
      data: {
        title: "Provincial Transition Governance Learning Labs",
        slug: "provincial-transition-governance-learning-labs",
        description:
          "Cross-provincial policy learning mechanism linking utilities, local government, and sector agencies around transition execution.",
        province: "East Java",
        location: "Surabaya",
        status: ProjectStatus.COMPLETED,
        impactHeadline:
          "Improved coordination around project permitting, policy sequencing, and implementation readiness.",
        startDate: new Date("2023-09-05"),
        endDate: new Date("2025-02-21"),
        themeId: themeMap["energy-policy"].id,
        stakeholders: {
          connect: [
            { id: stakeholderMap.policymaker.id },
            { id: stakeholderMap.researcher.id },
            { id: stakeholderMap.media.id }
          ]
        },
        impacts: {
          create: [
            {
              metric: "Beneficiaries",
              value: 340,
              unit: "people",
              measuredAt: new Date("2025-02-21")
            }
          ]
        }
      }
    })
  ]);

  void publications;
  void projects;
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
