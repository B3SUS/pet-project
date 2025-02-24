import React from "react";
import {Container} from "@/components/shared/Container";
import {Award, ShieldCheck, Truck} from "lucide-react";

interface Props{
    classname?: string
}

export const Advantages:React.FC<Props> = ({}) => {

    return(
        <section className={'mt-[88px]'}>
            <Container className={'flex items-center justify-between'}>
                <div className={'flex flex-col w-[328px] h-[218px] gap-3'}>
                    <div className={'rounded-full bg-[#F6F6F6] p-3 w-fit'}>
                        <Truck size={24}/>
                    </div>
                    <h1 className={'text-[16px] font-semibold'}>
                        Free Shipping
                    </h1>
                    <h2 className={'text-[#5C5F6A]'}>
                        Upgrade your style today and get FREE shipping on all orders! Don`t miss out.
                    </h2>
                </div>
                <div className={'flex flex-col w-[328px] h-[218px] gap-3'}>
                    <div className={'rounded-full bg-[#F6F6F6] p-3 w-fit'}>
                        <Award size={24}/>
                    </div>
                    <h1 className={'text-[16px] font-semibold'}>
                        Satisfaction Guarantee
                    </h1>
                    <h2 className={'text-[#5C5F6A]'}>
                        Shop confidently with our Satisfaction Guarantee: Love it or get a refund.
                    </h2>
                </div>
                <div className={'flex flex-col w-[328px] h-[218px] gap-3'}>
                    <div className={'rounded-full bg-[#F6F6F6] p-3 w-fit'}>
                        <ShieldCheck size={24}/>
                    </div>
                    <h1 className={'text-[16px] font-semibold'}>
                        Secure Payment
                    </h1>
                    <h2 className={'text-[#5C5F6A]'}>
                        Your security is our priority. Your payments are secure with us.
                    </h2>
                </div>
            </Container>
        </section>
    )
}