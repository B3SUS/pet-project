"use client"
import React from 'react'
import Image from 'next/image'
import {CircleUserRound, Search, ShoppingCart} from "lucide-react";
import {
    Input,
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "@/components/ui";
import Link from "next/link";
import {Container} from "@/components/shared/Container";

interface Props{
    className?: string
}

export const Header: React.FC<Props> = ({}) => {
    return(
        <header className={'flex justify-center'}>
            <Container className={'flex justify-between py-6'}>
                <div className={'flex justify-between items-center gap-20'}>
                    <Image src='/Header.png' alt={'Logo'} width={163} height={40}/>
                    <NavigationMenu className={'text-sm font-medium'}>
                        <NavigationMenuList className={'flex gap-4'}>
                            <NavigationMenuItem>
                                <Link href={'/'}>
                                    <NavigationMenuLink>
                                        Home
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul>
                                        <li>Content1</li>
                                        <li>Content2</li>
                                        <li>Content3</li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href={'/about'}>
                                    <NavigationMenuLink>
                                        About
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href={'/contact'}>
                                    <NavigationMenuLink>
                                        Contact
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className={'flex items-center justify-between gap-10 max-w-[370px]'}>
                    <div className={'relative w-full'}>
                        <Search size={20} className={'absolute top-1/2 -translate-y-1/2 left-1 text-[#878A92]'}/>
                        <Input type={"text"} width={264} height={45} className={'pl-6 placeholder:text-[#878A92] border-[#E6E7E8] rounded-[6px]'} placeholder={'Search products'}/>
                    </div>
                    <ShoppingCart size={35} className={'cursor-pointer'}/>
                    <CircleUserRound size={35} className={'cursor-pointer'}/>
                </div>
            </Container>
        </header>
    )
}