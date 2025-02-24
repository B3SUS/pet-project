'use client'
import {Container} from "@/components/shared/Container";
import {Button} from "@/components/ui";
import {MoveRight} from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props{
    classname?: string
}
export const Browse:React.FC<Props> = ({}) => {
    return(
        <section className={'bg-[#F6F6F6]'}>
            <Container className={'h-[304px]  flex items-center justify-between'}>
                <div className={'flex flex-col gap-12 w-[462px]'}>
                    <div className={'flex flex-col gap-4'}>
                        <h1 className={'text-3xl font-semibold text-[#202533]'}>
                            Browse Our Fashion Paradise!
                        </h1>
                        <h2 className={'text-[#474B57]'}>
                            Step into a world of style and explore our diverse collection of clothing categories.
                        </h2>
                    </div>
                    <div>
                        <Button variant={'default'} className={'px-6 py-3'}>
                            Start Browsing
                            <MoveRight/>
                        </Button>
                    </div>
                </div>
                <Image src={'/BrowseImage.png'} alt={'Browse Image'} width={225} height={311}/>
            </Container>
        </section>
    )
}