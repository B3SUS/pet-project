"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CircleUserRound, Search, ShoppingCart } from "lucide-react";
import {
  Input,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { HeaderSearch } from "@/components/shared/header-search";
import { useProductStore } from "@/stores/useProductStore";
import { useRouter } from "next/navigation";
import { ProfileButton } from "@/components/shared/(auth)/auth-components/profile-button";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({}) => {
  const { __parentCats, __fetchParentCats } = useProductStore();
  const router = useRouter();

  useEffect(() => {
    __fetchParentCats();
  }, [__fetchParentCats]);

  return (
    <header className={"flex justify-center"}>
      <Container className={"flex justify-between py-6"}>
        <div className={"flex justify-between items-center gap-20"}>
          <div className={"flex items-center gap-4"}>
            <Image
              src="/logo.png"
              alt={"Logo"}
              width={40}
              height={40}
              className={"border border-black rounded-full"}
            />
            <span className="text-lg font-bold text-[#0e1422]">B3SUS</span>
          </div>

          <NavigationMenu className={"text-sm font-medium"}>
            <NavigationMenuList className={"flex gap-4"}>
              <NavigationMenuItem>
                <NavigationMenuLink href={"/"}>Home</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className={"flex bg-white"}>
                    {__parentCats.map((category) => (
                      <Link
                        key={category.id}
                        href={`/categories/${category.name.toLowerCase()}`}
                        className={"p-5 hover:bg-black/10"}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href={"/about"}>About</NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href={"/contact"}>
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div
          className={"flex items-center justify-between gap-10 max-w-[370px]"}
        >
          <HeaderSearch />

          <ProfileButton />
        </div>
      </Container>
    </header>
  );
};
