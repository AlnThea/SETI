export type ThemeSlug =
  | "industrial-decarbonization"
  | "green-buildings"
  | "sustainable-energy-finance"
  | "energy-policy";

export type StakeholderType =
  | "policymaker"
  | "industry"
  | "researcher"
  | "financial-institution"
  | "media";

export type PublicationType =
  | "REPORT"
  | "POLICY_BRIEF"
  | "ARTICLE"
  | "CASE_STUDY"
  | "TOOLKIT";

export type ProjectStatus = "PLANNING" | "ACTIVE" | "COMPLETED" | "ON_HOLD";

export type KnowledgeSort =
  | "newest"
  | "oldest"
  | "featured"
  | "title-asc";

export interface KnowledgeSearchParams {
  q?: string;
  theme?: string;
  type?: PublicationType | "";
  year?: string;
  from?: string;
  to?: string;
  tag?: string;
  sort?: KnowledgeSort;
  page?: string;
}

export interface ThemeStat {
  label: string;
  value: string;
}
