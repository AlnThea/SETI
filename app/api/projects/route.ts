import { NextResponse } from "next/server";
import { getProjects } from "@/lib/queries";
import { normalizeProjectSearchParams } from "@/lib/utils";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const data = await getProjects(
    normalizeProjectSearchParams({
      q: searchParams.get("q") ?? "",
      theme: searchParams.get("theme") ?? "",
      status: searchParams.get("status") ?? "",
      province: searchParams.get("province") ?? "",
      view: searchParams.get("view") ?? "grid"
    })
  );

  return NextResponse.json({ data });
}
