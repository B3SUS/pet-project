import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(req: NextRequest) {
  const neededParent = Number.parseInt(
    req.nextUrl.searchParams.get("neededParent") ?? "",
  );
  const childCategories = await prisma.category.findMany({
    where: {
      parent_category_id: neededParent,
    },
    include: {
      product: true,
    },
  });
  return NextResponse.json(childCategories);
}
