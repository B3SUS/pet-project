"use server";
import { prisma } from "../../prisma/prisma-client";
import { Prisma } from "@prisma/client";
import { hashSync } from "bcrypt";

export async function registerUser(body: Prisma.userCreateInput) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (user) {
      throw new Error("User already exists");
    }

    const newUser = await prisma.user.create({
      data: {
        full_name: body.full_name,
        email: body.email,
        password: hashSync(body.password, 10),
        role: "USER",
        shopping_cart: {
          create: {},
        },
      },
    });
    return { success: true, user: newUser };
  } catch (error) {
    console.error("Error [CREATE_USER]", error);
    throw error;
  }
}
