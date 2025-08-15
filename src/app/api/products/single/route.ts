import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(req: NextRequest) {
  const neededProductId = Number.parseInt(
    req.nextUrl.searchParams.get("productId") ?? "",
  );
  const product = await prisma.product.findUnique({
    where: {
      id: neededProductId,
    },
  });
  return NextResponse.json(product);
}
