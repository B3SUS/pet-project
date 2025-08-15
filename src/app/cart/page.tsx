"use client";

import { Container } from "@/components/shared/Container";
import CartItems from "@/components/shared/cart/cart-left-side";
import OrderSummary from "@/components/shared/cart/cart-right-side";

export default function Cart() {
  return (
    <Container className={"flex py-16"}>
      <CartItems />
      <OrderSummary />
    </Container>
  );
}
