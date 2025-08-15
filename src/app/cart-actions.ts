import { prisma } from "../../prisma/prisma-client";

export async function addItemToCart(
  userId: string,
  productItemId: number,
  quantity: number,
) {
  try {
    let userCart = await prisma.shopping_cart.findFirst({
      where: {
        user_id: Number(userId),
      },
      select: {
        id: true,
        shopping_cart_item: {
          where: {
            product_item_id: productItemId,
          },
        },
      },
    });
    if (!userCart) {
      let userCart = await prisma.shopping_cart.create({
        data: {
          user_id: Number(userId),
        },
      });
    }
    if (userCart) {
      const existingCartItem = userCart.shopping_cart_item[0];
      if (existingCartItem) {
        await prisma.shopping_cart_item.update({
          where: {
            id: existingCartItem.id,
          },
          data: {
            qty: existingCartItem.qty + quantity,
          },
        });
        return { success: true };
      } else {
        await prisma.shopping_cart_item.create({
          data: {
            cart_id: userCart.id,
            product_item_id: productItemId,
            qty: quantity,
          },
        });
        return { success: true };
      }
    }
  } catch (error) {
    console.error("Error [ADD TO CART]", error);
  }
}
