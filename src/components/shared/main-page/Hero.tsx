"use client"
import React from "react";
import Image from 'next/image'
import {Button} from "@/components/ui";
import {MoveRight} from "lucide-react";
import {Container} from '../Container'

interface Props{
    classname?: string
}

export const Hero: React.FC<Props> = ({}) => {
    return(
        <section className={'bg-[#F6F6F6]'}>
            <Container className={'h-[440px]  flex items-center justify-between'}>
                <div className={'flex flex-col gap-12'}>
                    <div className={'flex flex-col gap-4'}>
                        <h1 className={'text-3xl font-semibold text-[#202533]'}>
                            Fresh Arrivals Online
                        </h1>
                        <h2 className={'text-[#474B57]'}>
                            Discover Our Newest Collection Today
                        </h2>
                    </div>
                    <div>
                        <Button variant={'default'} className={'px-6 py-3'}>
                            View Collection
                            <MoveRight/>
                        </Button>
                    </div>
                </div>
                <Image src={'/HeroImage.png'} alt={'Hero Image'} width={344} height={382} className={'self-end'}/>
            </Container>
        </section>
    )
}