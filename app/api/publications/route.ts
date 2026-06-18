import { NextResponse } from "next/server";
import { getKnowledgePageData } from "@/lib/queries";
import { normalizeKnowledgeSearchParams } from "@/lib/utils";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const data = await getKnowledgePageData(
    normalizeKnowledgeSearchParams({
      q: searchParams.get("q") ?? "",
      theme: searchParams.get("theme") ?? "",
      type: searchParams.get("type") ?? "",
      year: searchParams.get("year") ?? "",
      from: searchParams.get("from") ?? "",
      to: searchParams.get("to") ?? "",
      tag: searchParams.get("tag") ?? "",
      sort: searchParams.get("sort") ?? "",
      page: searchParams.get("page") ?? "1"
    })
  );

  return NextResponse.json({ data });
}
