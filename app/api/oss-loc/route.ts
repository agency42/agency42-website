import { NextResponse } from "next/server";
import { totalLinesOfCode } from "@/lib/github";

export async function GET() {
  try {
    const lines = await totalLinesOfCode();
    return NextResponse.json({ lines });
  } catch (e) {
    console.error("Error in LOC API route:", e);
    return NextResponse.json({ lines: 0 }, { status: 500 });
  }
} 