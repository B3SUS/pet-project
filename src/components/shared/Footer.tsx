"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "/public/logo1.png";
import githubIcon from "/public/GitHub.svg";
import instagramIcon from "/public/Instagram.svg";
import youtubeIcon from "/public/Youtube.svg";
import mastercardIcon from "/public/MasterCard.svg";
import visaIcon from "/public/Visa.svg";
import { Container } from "@/components/shared/Container";

export default function Footer() {
  return (
    <footer className="w-full">
      <Container className={"flex flex-col gap-32 items-center"}>
        <Container className={"max-h-[160px] mt-[88px] flex gap-40"}>
          <div className={"column_1 max-w-[272px]"}>
            <div className="flex items-center gap-4">
              <Image
                src={logo}
                alt={"logo"}
                className={"bg-white"}
                width={44}
                height={44}
              />
              <span className="text-lg font-bold text-[#0e1422]">B3SUS</span>
            </div>
            <p className="text-[14px] text-[#5c5f6a] mt-3">
              DevCut is a YouTube channel for practical project-based learning.
            </p>
            <div className={"logos flex items-center gap-6 mt-10"}>
              <Image src={githubIcon} alt={"github"} height={20} width={20} />
              <Image
                src={instagramIcon}
                alt={"instagram"}
                height={20}
                width={20}
              />
              <Image src={youtubeIcon} alt={"youtube"} height={20} width={20} />
            </div>
          </div>
          <div className={"column_2 flex gap-20"}>
            <div className={"support flex flex-col gap-10"}>
              <h1 className={"text-[14px] text-[#878a92]"}>SUPPORT</h1>
              <div className={"flex flex-col gap-4 text-[14px] text-[#5c5f6a]"}>
                <Link href={"/faq"}>FAQ</Link>
                <Link href={"/terms"}>Terms of use</Link>
                <Link href={"/policy"}>Privacy Policy</Link>
              </div>
            </div>
            <div className={"support flex flex-col gap-10"}>
              <h1 className={"text-[14px] text-[#878a92]"}>COMPANY</h1>
              <div className={"flex flex-col gap-4 text-[14px] text-[#5c5f6a]"}>
                <Link href={"/about"}>About us</Link>
                <Link href={"/contact"}>Contact</Link>
                <Link href={"/careers"}>Careers</Link>
              </div>
            </div>
            <div className={"support flex flex-col gap-10"}>
              <h1 className={"text-[14px] text-[#878a92]"}>SHOP</h1>
              <div className={"flex flex-col gap-4 text-[14px] text-[#5c5f6a]"}>
                <Link href={"/profile"}>My Account</Link>
                <Link href={"/checkout"}>Checkout</Link>
                <Link href={"/cart"}>Cart</Link>
              </div>
            </div>
          </div>
          <div className={"accepted_payments flex flex-col gap-10"}>
            <h1 className={"text-[14px] text-[#878a92]"}>ACCEPTED PAYMENTS</h1>
            <div className={"payment_logos flex gap-4"}>
              <Image
                src={mastercardIcon}
                alt={"MasterCard"}
                width={30}
                height={30}
              />
              <Image src={visaIcon} alt={"Visa"} width={42} height={30} />
            </div>
          </div>
        </Container>
        <div className={"text-center w-full py-7 border-t border-t-[#f6f6f6]"}>
          <span className={"text-[14px] text-[#717171]"}>
            © 2025 B3SUS. Solo developer
          </span>
        </div>
      </Container>
    </footer>
  );
}
