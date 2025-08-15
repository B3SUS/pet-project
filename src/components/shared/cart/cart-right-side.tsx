import { Button } from "@/components/ui";
import Link from "next/link";

export default function OrderSummary() {
  return (
    <div
      className={
        "flex flex-col border border-[#e6e7e8] px-6 py-8 rounded-[4px] w-[340px] font-semibold"
      }
    >
      <div className={"flex flex-col gap-10 text-center"}>
        <h1 className={"self-start"}>Order Summary</h1>
        <div className={"text-[14px] flex flex-col gap-4"}>
          <div className={"flex justify-between items-center"}>
            <span className={"text-[#5C5F6A]"}>Subtotal</span>
            <span className={"text-[#0E1422]"}>$ 90.00</span>
          </div>
          <div className={"flex justify-between items-center"}>
            <span className={"text-[#5C5F6A]"}>Shipping</span>
            <span className={"text-[#0E1422]"}>Free</span>
          </div>
          <div className={"flex justify-between items-center"}>
            <span className={"text-[#5C5F6A]"}>Tax</span>
            <span className={"text-[#0E1422]"}>$ 3.00</span>
          </div>
        </div>
        <div className={"separator border border-[#E6E7E8] w-full"} />
        <div className={"total flex justify-between items-center"}>
          <span className={"text-[#0E1422]"}>Total</span>
          <span className={"text-[#0E1422]"}>$ 100.00</span>
        </div>
        <Button
          className={
            "w-full rounded-[4px] bg-[#0E1422] border border-[#0E1422] py-4 px-6"
          }
        >
          Checkout
        </Button>
        <Link href={"/"} className={"underline text-[#0E1422] text-sm"}>
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
