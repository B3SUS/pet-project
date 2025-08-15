import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../prisma/prisma-client";

export async function GET(req: NextRequest) {
  const parentCategories = await prisma.category.findMany({
    where: {
      parent_category_id: null,
    },
  });
  return NextResponse.json(parentCategories);
}
