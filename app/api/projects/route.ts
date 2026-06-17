import { NextResponse } from "next/server";
import { getProjects } from "@/lib/queries";

export async function GET() {
  const data = await getProjects();
  return NextResponse.json({ data });
}

