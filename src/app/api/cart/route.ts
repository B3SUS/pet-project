import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/prisma-client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (session) {
    const userId = parseInt(session.user.id);
    try {
      const shoppingCart = await prisma.shopping_cart.findFirst({
        where: {
          user_id: userId,
        },
        include: {
          shopping_cart_item: true,
        },
      });
      return NextResponse.json(shoppingCart);
    } catch (error) {
      console.error("Error [GET CART]", error);
    }
  }
}
