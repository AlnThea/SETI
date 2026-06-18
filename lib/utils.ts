import { clsx, type ClassValue } from "clsx";
import type {
  KnowledgeSearchParams,
  KnowledgeSort,
  ProjectSearchParams,
  ProjectStatus,
  ProjectView
} from "@/lib/types";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPublicationType(type: string) {
  return type
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function formatStakeholderType(type: string) {
  return type
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function formatProjectStatus(status: string) {
  return status
    .toLowerCase()
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function formatMonthYear(date: Date | null | undefined) {
  if (!date) return "Draft";

  return date.toLocaleDateString("en-GB", {
    month: "short",
    year: "numeric"
  });
}

export function normalizeKnowledgeSearchParams(
  params:
    | Partial<KnowledgeSearchParams>
    | Partial<Record<keyof KnowledgeSearchParams, string | undefined>>
    | undefined
): KnowledgeSearchParams {
  const typeValue = params?.type;
  const pageValue = params?.page;

  return {
    q: params?.q?.trim() || "",
    theme: params?.theme?.trim() || "",
    type: isPublicationType(typeValue) ? typeValue : "",
    year: params?.year?.trim() || "",
    from: params?.from?.trim() || "",
    to: params?.to?.trim() || "",
    tag: params?.tag?.trim() || "",
    sort: isKnowledgeSort(params?.sort) ? params.sort : "featured",
    page: normalizePageValue(pageValue)
  };
}

export function normalizeProjectSearchParams(
  params:
    | Partial<ProjectSearchParams>
    | Partial<Record<keyof ProjectSearchParams, string | undefined>>
    | undefined
): ProjectSearchParams {
  return {
    q: params?.q?.trim() || "",
    theme: params?.theme?.trim() || "",
    status: isProjectStatus(params?.status) ? params.status : "",
    province: params?.province?.trim() || "",
    view: isProjectView(params?.view) ? params.view : "grid"
  };
}

function isKnowledgeSort(value: string | undefined): value is KnowledgeSort {
  return value === "newest" || value === "oldest" || value === "featured" || value === "title-asc";
}

function isPublicationType(
  value: string | undefined
): value is KnowledgeSearchParams["type"] {
  return (
    value === "REPORT" ||
    value === "POLICY_BRIEF" ||
    value === "ARTICLE" ||
    value === "CASE_STUDY" ||
    value === "TOOLKIT"
  );
}

function normalizePageValue(value: string | undefined) {
  if (!value) return "1";

  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed) || parsed < 1) {
    return "1";
  }

  return parsed.toString();
}

function isProjectStatus(value: string | undefined): value is ProjectStatus {
  return (
    value === "PLANNING" ||
    value === "ACTIVE" ||
    value === "COMPLETED" ||
    value === "ON_HOLD"
  );
}

function isProjectView(value: string | undefined): value is ProjectView {
  return value === "grid" || value === "map";
}
