import { Button, Input } from "@/components/ui";
import { Container } from "@/components/shared/Container";

export default function Newsletter() {
  return (
    <section className="w-full bg-[#f6f6f6]">
      <Container className={"mx-auto py-16 flex  items-center justify-between"}>
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold text-[#0e1422]">
            Join Our Newsletter
          </h2>
          <p className="text-[14px] text-[#5c5f6a]">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>
        <div className="flex gap-4">
          <Input
            id="email"
            type="email"
            required
            placeholder="Your email address"
            className="rounded-[6px] bg-[#ffffff] border border-[#e6e7e8] text-[#0e1422] placeholder:text-[#878a92] px-4 w-[320px] py-[10px] focus-visible:ring-[#016fd0]"
          />
          <Button
            type="submit"
            className="rounded-[4px] py-3 px-6 bg-black text-white hover:bg-white hover:text-black text-[14px] leading-4"
          >
            Subscribe
          </Button>
        </div>
      </Container>
    </section>
  );
}
