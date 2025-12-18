import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Get all users" });
}

export async function POST(request: Request) {
  return NextResponse.json({ message: "Create user" });
}
