import { NextResponse } from "next/server";
import { getKnowledgePageData } from "@/lib/queries";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get("q") ?? undefined;
  const data = await getKnowledgePageData(q);

  return NextResponse.json({ data });
}

