import { PrismaClient, ProjectStatus, PublicationType } from "@prisma/client";

const prisma = new PrismaClient();

type ThemeKey =
  | "industrial-decarbonization"
  | "green-buildings"
  | "sustainable-energy-finance"
  | "energy-policy";

type StakeholderKey =
  | "policymaker"
  | "industry"
  | "researcher"
  | "financial-institution"
  | "media";

type OrganizationKey = "seti" | "iesr" | "gggi";

interface PublicationBlueprint {
  title: string;
  summary: string;
  type: PublicationType;
  publishedAt: string;
  theme: ThemeKey;
  organization: OrganizationKey;
  stakeholders: StakeholderKey[];
  tags: string[];
  featured?: boolean;
}

const publicationBlueprints: PublicationBlueprint[] = [
  {
    title: "Decarbonizing Industrial Heat in Java's Manufacturing Belt",
    summary:
      "An implementation-focused report on low-temperature heat electrification, fuel switching, and phased efficiency upgrades for medium and large manufacturers.",
    type: PublicationType.REPORT,
    featured: true,
    publishedAt: "2025-05-06",
    theme: "industrial-decarbonization",
    organization: "seti",
    stakeholders: ["policymaker", "industry", "researcher"],
    tags: ["implementation", "industrial-heat"]
  },
  {
    title: "Retrofit Playbook for Energy-Efficient Public Buildings",
    summary:
      "A practical toolkit for municipal retrofits covering audits, procurement packages, implementation governance, and post-retrofit verification.",
    type: PublicationType.TOOLKIT,
    featured: true,
    publishedAt: "2025-03-11",
    theme: "green-buildings",
    organization: "gggi",
    stakeholders: ["policymaker", "industry", "media"],
    tags: ["implementation", "urban-retrofit"]
  },
  {
    title: "Catalyzing Transition Finance for Commercial Rooftop Solar",
    summary:
      "Policy brief on credit enhancement, debt aggregation, and pipeline preparation to unlock commercial solar finance in secondary cities.",
    type: PublicationType.POLICY_BRIEF,
    featured: true,
    publishedAt: "2025-04-02",
    theme: "sustainable-energy-finance",
    organization: "iesr",
    stakeholders: ["financial-institution", "policymaker", "researcher"],
    tags: ["finance", "policy-reform"]
  },
  {
    title: "Tracking Policy-to-Implementation Gaps in Indonesia's Power Transition",
    summary:
      "Case-study article showing where national policy signals diverge from provincial execution and utility readiness.",
    type: PublicationType.CASE_STUDY,
    featured: true,
    publishedAt: "2025-02-28",
    theme: "energy-policy",
    organization: "seti",
    stakeholders: ["policymaker", "media", "researcher"],
    tags: ["policy-reform"]
  },
  {
    title: "Industrial Demand Response for Low-Carbon Grid Flexibility",
    summary:
      "Article on load-shifting opportunities and procurement models for flexible industrial demand in priority regions.",
    type: PublicationType.ARTICLE,
    publishedAt: "2024-11-09",
    theme: "industrial-decarbonization",
    organization: "seti",
    stakeholders: ["industry"],
    tags: ["grid-flexibility", "implementation"]
  },
  {
    title: "Green Leasing Mechanisms for Commercial Office Retrofits",
    summary:
      "Report on aligning landlord-tenant incentives to accelerate efficient equipment replacement in premium office stock.",
    type: PublicationType.REPORT,
    publishedAt: "2024-10-20",
    theme: "green-buildings",
    organization: "gggi",
    stakeholders: ["industry", "financial-institution"],
    tags: ["finance", "urban-retrofit"]
  },
  {
    title: "Electrified Boiler Readiness for Textile Clusters in Central Java",
    summary:
      "Assessment of steam system baselines, grid readiness, and retrofit sequencing for export-oriented textile facilities.",
    type: PublicationType.REPORT,
    publishedAt: "2025-01-18",
    theme: "industrial-decarbonization",
    organization: "seti",
    stakeholders: ["industry", "researcher"],
    tags: ["implementation", "industrial-heat"]
  },
  {
    title: "Waste-Heat Recovery Procurement Note for Food Processing Plants",
    summary:
      "Concise guidance on packaging engineering scope, vendor prequalification, and performance clauses for heat recovery investments.",
    type: PublicationType.POLICY_BRIEF,
    publishedAt: "2024-12-03",
    theme: "industrial-decarbonization",
    organization: "iesr",
    stakeholders: ["industry", "policymaker"],
    tags: ["implementation", "industrial-heat"]
  },
  {
    title: "MRV Templates for Industrial Fuel-Switching Pilots",
    summary:
      "Toolkit with measurement, reporting, and verification templates for early industrial decarbonization pilots.",
    type: PublicationType.TOOLKIT,
    publishedAt: "2024-09-14",
    theme: "industrial-decarbonization",
    organization: "seti",
    stakeholders: ["researcher", "industry"],
    tags: ["implementation", "policy-reform"]
  },
  {
    title: "Cluster-Level Biomass Fuel Quality Risks for Process Heat Users",
    summary:
      "Case study on feedstock quality, combustion reliability, and contract design risks in shared industrial zones.",
    type: PublicationType.CASE_STUDY,
    publishedAt: "2024-08-22",
    theme: "industrial-decarbonization",
    organization: "gggi",
    stakeholders: ["industry", "financial-institution"],
    tags: ["industrial-heat", "finance"]
  },
  {
    title: "Flexible Load Contracts for Export Manufacturing Parks",
    summary:
      "Article on commercial structures that reward flexible demand and reduce system stress during evening peaks.",
    type: PublicationType.ARTICLE,
    publishedAt: "2024-07-10",
    theme: "industrial-decarbonization",
    organization: "seti",
    stakeholders: ["industry", "policymaker"],
    tags: ["grid-flexibility", "finance"]
  },
  {
    title: "Roadmap for Low-Carbon Steam in Ceramics and Food Processing",
    summary:
      "Report mapping cost-effective transition pathways for steam-intensive subsectors with differing load profiles.",
    type: PublicationType.REPORT,
    publishedAt: "2024-06-05",
    theme: "industrial-decarbonization",
    organization: "iesr",
    stakeholders: ["industry", "researcher", "policymaker"],
    tags: ["industrial-heat", "implementation"]
  },
  {
    title: "Bankability Signals for Industrial Electrification Aggregators",
    summary:
      "Policy brief identifying contract conditions and data requirements that lenders need before backing retrofit aggregators.",
    type: PublicationType.POLICY_BRIEF,
    publishedAt: "2024-05-16",
    theme: "industrial-decarbonization",
    organization: "iesr",
    stakeholders: ["financial-institution", "industry"],
    tags: ["finance", "industrial-heat"]
  },
  {
    title: "Operational Lessons from Medium-Temperature Heat Pump Pilots",
    summary:
      "Case study capturing commissioning constraints, maintenance patterns, and tariff sensitivities from pilot users.",
    type: PublicationType.CASE_STUDY,
    publishedAt: "2024-04-09",
    theme: "industrial-decarbonization",
    organization: "gggi",
    stakeholders: ["industry", "media", "researcher"],
    tags: ["implementation", "industrial-heat"]
  },
  {
    title: "Provincial Incentive Options for Cleaner Industrial Boilers",
    summary:
      "Article comparing local fiscal and non-fiscal instruments that can accelerate cleaner boiler replacement.",
    type: PublicationType.ARTICLE,
    publishedAt: "2024-03-12",
    theme: "industrial-decarbonization",
    organization: "seti",
    stakeholders: ["policymaker", "researcher"],
    tags: ["policy-reform", "industrial-heat"]
  },
  {
    title: "Baseline Energy Intensity Dataset for Priority Manufacturing Subsectors",
    summary:
      "Toolkit-style reference for benchmarking cement, food processing, ceramics, and textile facilities across major islands.",
    type: PublicationType.TOOLKIT,
    publishedAt: "2024-02-01",
    theme: "industrial-decarbonization",
    organization: "seti",
    stakeholders: ["researcher", "industry"],
    tags: ["implementation", "grid-flexibility"]
  },
  {
    title: "High-Performance Envelope Retrofits for Mid-Rise Public Buildings",
    summary:
      "Report on shading, glazing, and ventilation interventions that reduce cooling demand in humid urban settings.",
    type: PublicationType.REPORT,
    publishedAt: "2025-05-17",
    theme: "green-buildings",
    organization: "gggi",
    stakeholders: ["policymaker", "industry", "researcher"],
    tags: ["urban-retrofit", "implementation"]
  },
  {
    title: "Municipal ESCO Structuring for City-Owned Buildings",
    summary:
      "Policy brief outlining procurement guardrails and payment triggers for performance-based retrofit contracts.",
    type: PublicationType.POLICY_BRIEF,
    publishedAt: "2025-04-10",
    theme: "green-buildings",
    organization: "iesr",
    stakeholders: ["policymaker", "financial-institution"],
    tags: ["finance", "urban-retrofit"]
  },
  {
    title: "Cooling Load Diagnostics for Public Hospitals in Dense Urban Areas",
    summary:
      "Case study examining operational inefficiencies, chiller staging issues, and indoor comfort tradeoffs.",
    type: PublicationType.CASE_STUDY,
    publishedAt: "2025-03-02",
    theme: "green-buildings",
    organization: "seti",
    stakeholders: ["researcher", "media", "policymaker"],
    tags: ["urban-retrofit", "implementation"]
  },
  {
    title: "Office Tower Retrofit Phasing Without Tenant Disruption",
    summary:
      "Article on sequencing control upgrades, lighting replacement, and HVAC work in occupied commercial buildings.",
    type: PublicationType.ARTICLE,
    publishedAt: "2025-02-15",
    theme: "green-buildings",
    organization: "gggi",
    stakeholders: ["industry", "media"],
    tags: ["urban-retrofit", "implementation"]
  },
  {
    title: "Building Audit Scope Pack for Provincial Government Assets",
    summary:
      "Toolkit with sample audit scopes, data request lists, and handover formats for public building portfolios.",
    type: PublicationType.TOOLKIT,
    publishedAt: "2024-12-11",
    theme: "green-buildings",
    organization: "seti",
    stakeholders: ["policymaker", "researcher"],
    tags: ["urban-retrofit", "policy-reform"]
  },
  {
    title: "Commercial Retrofit Credit Lines for Secondary City Developers",
    summary:
      "Report on lender appetite, project screening, and covenant design for building efficiency credit lines.",
    type: PublicationType.REPORT,
    publishedAt: "2024-11-02",
    theme: "green-buildings",
    organization: "iesr",
    stakeholders: ["financial-institution", "industry"],
    tags: ["finance", "urban-retrofit"]
  },
  {
    title: "Daylighting Standards Adoption in Education Facilities",
    summary:
      "Policy brief identifying code updates and procurement standards that can improve visual comfort and energy performance.",
    type: PublicationType.POLICY_BRIEF,
    publishedAt: "2024-10-08",
    theme: "green-buildings",
    organization: "gggi",
    stakeholders: ["policymaker", "media"],
    tags: ["policy-reform", "urban-retrofit"]
  },
  {
    title: "District Cooling Readiness for Mixed-Use Urban Developments",
    summary:
      "Case study exploring anchor loads, phasing logic, and governance issues for district cooling pilots.",
    type: PublicationType.CASE_STUDY,
    publishedAt: "2024-09-04",
    theme: "green-buildings",
    organization: "seti",
    stakeholders: ["industry", "researcher", "financial-institution"],
    tags: ["implementation", "finance"]
  },
  {
    title: "Operational Benchmarks for Efficient Municipal Service Buildings",
    summary:
      "Article summarizing normalized energy use intensities and low-cost operational improvements across city facilities.",
    type: PublicationType.ARTICLE,
    publishedAt: "2024-08-12",
    theme: "green-buildings",
    organization: "seti",
    stakeholders: ["policymaker", "researcher"],
    tags: ["urban-retrofit", "implementation"]
  },
  {
    title: "Performance Specs for Heat-Reflective Roof Retrofits",
    summary:
      "Toolkit for writing outcome-focused technical specifications in hot-climate building retrofit packages.",
    type: PublicationType.TOOLKIT,
    publishedAt: "2024-07-18",
    theme: "green-buildings",
    organization: "gggi",
    stakeholders: ["industry", "policymaker"],
    tags: ["urban-retrofit", "implementation"]
  },
  {
    title: "Public Housing Efficiency Upgrades and Resident Comfort Outcomes",
    summary:
      "Report covering thermal comfort, maintenance needs, and procurement lessons from public housing upgrades.",
    type: PublicationType.REPORT,
    publishedAt: "2024-06-07",
    theme: "green-buildings",
    organization: "iesr",
    stakeholders: ["media", "policymaker", "researcher"],
    tags: ["implementation", "urban-retrofit"]
  },
  {
    title: "Tariff Incentives for Deep Retrofits in Commercial Buildings",
    summary:
      "Policy brief examining utility and fiscal incentives that could support deeper retrofit packages.",
    type: PublicationType.POLICY_BRIEF,
    publishedAt: "2024-05-09",
    theme: "green-buildings",
    organization: "iesr",
    stakeholders: ["financial-institution", "policymaker", "industry"],
    tags: ["finance", "policy-reform"]
  },
  {
    title: "Retro-Commissioning Lessons from Climate-Controlled Archives",
    summary:
      "Case study from heritage and records facilities that require strict temperature and humidity control.",
    type: PublicationType.CASE_STUDY,
    publishedAt: "2024-04-11",
    theme: "green-buildings",
    organization: "seti",
    stakeholders: ["researcher", "media"],
    tags: ["implementation", "urban-retrofit"]
  },
  {
    title: "Blended Finance Pathways for Municipal Solar and Efficiency Bundles",
    summary:
      "Report on layering concessional capital, guarantees, and commercial debt for city-level project bundles.",
    type: PublicationType.REPORT,
    publishedAt: "2025-05-21",
    theme: "sustainable-energy-finance",
    organization: "iesr",
    stakeholders: ["financial-institution", "policymaker", "industry"],
    tags: ["finance", "implementation"]
  },
  {
    title: "Credit Enhancement Triggers for Commercial Clean Energy Portfolios",
    summary:
      "Policy brief on what portfolio quality signals should unlock partial guarantees and subordinated capital.",
    type: PublicationType.POLICY_BRIEF,
    publishedAt: "2025-04-18",
    theme: "sustainable-energy-finance",
    organization: "iesr",
    stakeholders: ["financial-institution", "researcher"],
    tags: ["finance", "policy-reform"]
  },
  {
    title: "Rooftop Solar Aggregation Models in Provincial Business Districts",
    summary:
      "Case study on aggregation, contract standardization, and developer pipelines outside Jakarta.",
    type: PublicationType.CASE_STUDY,
    publishedAt: "2025-03-06",
    theme: "sustainable-energy-finance",
    organization: "gggi",
    stakeholders: ["industry", "financial-institution", "media"],
    tags: ["finance", "implementation"]
  },
  {
    title: "Transition Finance Narratives That Work with Domestic Banks",
    summary:
      "Article on how local lenders frame risk, tenor, and sponsor quality in clean energy transactions.",
    type: PublicationType.ARTICLE,
    publishedAt: "2025-02-08",
    theme: "sustainable-energy-finance",
    organization: "seti",
    stakeholders: ["financial-institution", "media"],
    tags: ["finance"]
  },
  {
    title: "Pipeline Screening Templates for Distributed Energy Transactions",
    summary:
      "Toolkit with minimum data fields, sponsor screens, and early risk flags for transaction origination teams.",
    type: PublicationType.TOOLKIT,
    publishedAt: "2025-01-14",
    theme: "sustainable-energy-finance",
    organization: "iesr",
    stakeholders: ["financial-institution", "industry", "researcher"],
    tags: ["finance", "implementation"]
  },
  {
    title: "Demand Aggregation and Offtake Design for Mini-Grid Expansion",
    summary:
      "Report on creditworthy demand aggregation and tariff structures for mini-grid growth in productive-use corridors.",
    type: PublicationType.REPORT,
    publishedAt: "2024-12-19",
    theme: "sustainable-energy-finance",
    organization: "gggi",
    stakeholders: ["policymaker", "financial-institution", "industry"],
    tags: ["finance", "policy-reform"]
  },
  {
    title: "Guarantee Mechanisms for Public-Sector Energy Performance Contracts",
    summary:
      "Policy brief clarifying guarantee use cases and fiscal treatment in public-sector energy performance contracts.",
    type: PublicationType.POLICY_BRIEF,
    publishedAt: "2024-11-15",
    theme: "sustainable-energy-finance",
    organization: "iesr",
    stakeholders: ["policymaker", "financial-institution"],
    tags: ["finance", "policy-reform"]
  },
  {
    title: "Catalytic Capital Lessons from Building Efficiency Funds",
    summary:
      "Case study on governance, blended capital structures, and exit expectations from regional building funds.",
    type: PublicationType.CASE_STUDY,
    publishedAt: "2024-10-10",
    theme: "sustainable-energy-finance",
    organization: "gggi",
    stakeholders: ["financial-institution", "researcher"],
    tags: ["finance", "urban-retrofit"]
  },
  {
    title: "Structuring Results-Based Payments for Industrial Decarbonization",
    summary:
      "Article examining when results-based instruments actually reduce risk and when they simply add transaction cost.",
    type: PublicationType.ARTICLE,
    publishedAt: "2024-09-06",
    theme: "sustainable-energy-finance",
    organization: "seti",
    stakeholders: ["financial-institution", "policymaker", "industry"],
    tags: ["finance", "industrial-heat"]
  },
  {
    title: "Sponsor Due Diligence Checklist for Transition Finance Committees",
    summary:
      "Toolkit covering governance, technical capability, reporting maturity, and counterpart exposure in sponsor reviews.",
    type: PublicationType.TOOLKIT,
    publishedAt: "2024-08-08",
    theme: "sustainable-energy-finance",
    organization: "seti",
    stakeholders: ["financial-institution", "researcher"],
    tags: ["finance"]
  },
  {
    title: "Early-Stage Project Preparation Costs in Distributed Solar Markets",
    summary:
      "Report quantifying development costs and the role of concessional support in unlocking bankable pipelines.",
    type: PublicationType.REPORT,
    publishedAt: "2024-07-03",
    theme: "sustainable-energy-finance",
    organization: "iesr",
    stakeholders: ["financial-institution", "industry", "researcher"],
    tags: ["finance", "implementation"]
  },
  {
    title: "Taxonomy Signals for Transition-Aligned Credit Products",
    summary:
      "Policy brief on how a domestic green taxonomy could shape underwriting and product development.",
    type: PublicationType.POLICY_BRIEF,
    publishedAt: "2024-06-13",
    theme: "sustainable-energy-finance",
    organization: "iesr",
    stakeholders: ["policymaker", "financial-institution", "media"],
    tags: ["finance", "policy-reform"]
  },
  {
    title: "Credit Committee Lessons from Pilot Energy Efficiency Loans",
    summary:
      "Case study documenting approval bottlenecks, covenant concerns, and portfolio learning from pilot transactions.",
    type: PublicationType.CASE_STUDY,
    publishedAt: "2024-05-02",
    theme: "sustainable-energy-finance",
    organization: "gggi",
    stakeholders: ["financial-institution", "media", "researcher"],
    tags: ["finance", "implementation"]
  },
  {
    title: "Provincial Energy Planning and National Policy Alignment",
    summary:
      "Report on where provincial planning cycles align with or lag behind national transition objectives and fiscal calendars.",
    type: PublicationType.REPORT,
    publishedAt: "2025-05-13",
    theme: "energy-policy",
    organization: "seti",
    stakeholders: ["policymaker", "researcher", "media"],
    tags: ["policy-reform", "implementation"]
  },
  {
    title: "Power Sector Reform Sequencing for Faster Project Delivery",
    summary:
      "Policy brief on sequencing regulatory interventions so project approvals move without breaking institutional accountability.",
    type: PublicationType.POLICY_BRIEF,
    publishedAt: "2025-04-07",
    theme: "energy-policy",
    organization: "iesr",
    stakeholders: ["policymaker", "media"],
    tags: ["policy-reform"]
  },
  {
    title: "Transmission Readiness Bottlenecks in Renewable Energy Corridors",
    summary:
      "Case study connecting grid planning, land constraints, and local permitting to renewable project delays.",
    type: PublicationType.CASE_STUDY,
    publishedAt: "2025-03-19",
    theme: "energy-policy",
    organization: "seti",
    stakeholders: ["policymaker", "researcher", "industry"],
    tags: ["policy-reform", "grid-flexibility"]
  },
  {
    title: "Public Communication Patterns in Sensitive Energy Reforms",
    summary:
      "Article on narrative framing and trust-building in reform periods that affect tariffs, subsidies, or procurement rules.",
    type: PublicationType.ARTICLE,
    publishedAt: "2025-02-12",
    theme: "energy-policy",
    organization: "seti",
    stakeholders: ["media", "policymaker"],
    tags: ["policy-reform"]
  },
  {
    title: "Implementation Tracker for Provincial Energy Transition Commitments",
    summary:
      "Toolkit for structuring milestone tracking, accountability owners, and evidence collection across agencies.",
    type: PublicationType.TOOLKIT,
    publishedAt: "2025-01-24",
    theme: "energy-policy",
    organization: "gggi",
    stakeholders: ["policymaker", "researcher"],
    tags: ["policy-reform", "implementation"]
  },
  {
    title: "Regulatory Signals Needed for Industrial Electrification Scale-Up",
    summary:
      "Report on tariff, permitting, and planning reforms that would unlock faster industrial electrification deployment.",
    type: PublicationType.REPORT,
    publishedAt: "2024-12-16",
    theme: "energy-policy",
    organization: "iesr",
    stakeholders: ["policymaker", "industry", "financial-institution"],
    tags: ["policy-reform", "industrial-heat"]
  },
  {
    title: "Procurement Rule Adjustments for Municipal Efficiency Programs",
    summary:
      "Policy brief on changes needed to let cities buy outcomes instead of isolated equipment packages.",
    type: PublicationType.POLICY_BRIEF,
    publishedAt: "2024-11-13",
    theme: "energy-policy",
    organization: "gggi",
    stakeholders: ["policymaker", "media", "researcher"],
    tags: ["policy-reform", "urban-retrofit"]
  },
  {
    title: "Institutional Coordination Lessons from Utility-Province Working Groups",
    summary:
      "Case study on what actually improved coordination between utilities, planners, and local economic offices.",
    type: PublicationType.CASE_STUDY,
    publishedAt: "2024-10-05",
    theme: "energy-policy",
    organization: "seti",
    stakeholders: ["policymaker", "researcher", "media"],
    tags: ["implementation", "policy-reform"]
  },
  {
    title: "What Provincial Legislatures Need to Read Energy Transition Budgets",
    summary:
      "Article translating transition planning into fiscal language that local legislatures can interrogate and approve.",
    type: PublicationType.ARTICLE,
    publishedAt: "2024-09-09",
    theme: "energy-policy",
    organization: "seti",
    stakeholders: ["policymaker", "media"],
    tags: ["policy-reform", "finance"]
  },
  {
    title: "Policy Adoption Readiness Checklist for Clean Energy Regulations",
    summary:
      "Toolkit identifying legal, fiscal, institutional, and communications preconditions for effective policy rollout.",
    type: PublicationType.TOOLKIT,
    publishedAt: "2024-08-01",
    theme: "energy-policy",
    organization: "gggi",
    stakeholders: ["policymaker", "researcher"],
    tags: ["policy-reform"]
  },
  {
    title: "Grid Access Reform and Developer Confidence in Emerging Regions",
    summary:
      "Report on how predictable interconnection rules affect pipeline confidence in non-core renewable markets.",
    type: PublicationType.REPORT,
    publishedAt: "2024-07-15",
    theme: "energy-policy",
    organization: "iesr",
    stakeholders: ["industry", "financial-institution", "policymaker"],
    tags: ["grid-flexibility", "policy-reform"]
  },
  {
    title: "Permitting Reform for Small and Mid-Sized Clean Energy Projects",
    summary:
      "Policy brief focusing on permit sequencing, authority overlap, and service standards that slow smaller projects.",
    type: PublicationType.POLICY_BRIEF,
    publishedAt: "2024-06-06",
    theme: "energy-policy",
    organization: "iesr",
    stakeholders: ["policymaker", "industry", "media"],
    tags: ["policy-reform", "implementation"]
  },
  {
    title: "Provincial Reform Labs and the Politics of Energy Transition Delivery",
    summary:
      "Case study capturing how reform coalitions formed, stalled, and adapted in provincial transition labs.",
    type: PublicationType.CASE_STUDY,
    publishedAt: "2024-05-14",
    theme: "energy-policy",
    organization: "seti",
    stakeholders: ["researcher", "media", "policymaker"],
    tags: ["implementation", "policy-reform"]
  }
];

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function main() {
  await prisma.impact.deleteMany();
  await prisma.project.deleteMany();
  await prisma.publication.deleteMany();
  await prisma.tag.deleteMany();
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

  const organizationMap = { seti, iesr, gggi } as const;

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

  const themeMap = Object.fromEntries(themes.map((theme) => [theme.slug, theme])) as Record<
    ThemeKey,
    (typeof themes)[number]
  >;
  const stakeholderMap = Object.fromEntries(
    stakeholders.map((stakeholder) => [stakeholder.type, stakeholder])
  ) as Record<StakeholderKey, (typeof stakeholders)[number]>;

  const tags = await Promise.all([
    prisma.tag.create({ data: { name: "Implementation", slug: "implementation" } }),
    prisma.tag.create({ data: { name: "Policy Reform", slug: "policy-reform" } }),
    prisma.tag.create({ data: { name: "Finance", slug: "finance" } }),
    prisma.tag.create({ data: { name: "Urban Retrofit", slug: "urban-retrofit" } }),
    prisma.tag.create({ data: { name: "Grid Flexibility", slug: "grid-flexibility" } }),
    prisma.tag.create({ data: { name: "Industrial Heat", slug: "industrial-heat" } })
  ]);

  const tagMap = Object.fromEntries(tags.map((tag) => [tag.slug, tag])) as Record<
    string,
    (typeof tags)[number]
  >;

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

  await Promise.all(
    publicationBlueprints.map((item) =>
      prisma.publication.create({
        data: {
          title: item.title,
          slug: slugify(item.title),
          summary: item.summary,
          type: item.type,
          featured: item.featured ?? false,
          publishedAt: new Date(item.publishedAt),
          organizationName: organizationMap[item.organization].name,
          themeId: themeMap[item.theme].id,
          organizationId: organizationMap[item.organization].id,
          stakeholders: {
            connect: item.stakeholders.map((stakeholder) => ({
              id: stakeholderMap[stakeholder].id
            }))
          },
          tags: {
            connect: item.tags.map((tag) => ({
              id: tagMap[tag].id
            }))
          }
        }
      })
    )
  );

  await Promise.all([
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
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
