import { useSession } from "next-auth/react";
import { CircleUserRound, LogIn, ShoppingCart } from "lucide-react";
import React from "react";
import Link from "next/link";
import { router } from "next/client";

interface Props {
  className?: string;
}

export const ProfileButton: React.FC<Props> = ({ className }) => {
  const { data: session } = useSession();

  return (
    <div className={className}>
      {!session ? (
        <Link
          href={"/login"}
          className={
            "flex items-center gap-2 border rounded-full border-neutral-300 py-1 px-2 hover:bg-[#f6f6f6]"
          }
        >
          <LogIn size={19} color={"#5c5f6a"} className={"cursor-pointer"} />
          Sign In
        </Link>
      ) : (
        <div className={"flex gap-6"}>
          <Link href={"/cart"}>
            <ShoppingCart size={25} color={"#5c5f6a"} />
          </Link>

          <Link href={"/profile"}>
            <CircleUserRound
              size={25}
              color={"#5c5f6a"}
              className={"cursor-pointer"}
            />
          </Link>
        </div>
      )}
    </div>
  );
};
