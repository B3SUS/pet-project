import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";

export async function GET(req: NextRequest) {
  const neededParent = Number.parseInt(
    req.nextUrl.searchParams.get("neededParent") ?? "",
  );
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}
