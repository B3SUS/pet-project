import { FormProvider, useForm } from "react-hook-form";
import {
  formLoginSchema,
  TFormLoginValues,
} from "@/components/shared/(auth)/auth-form/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Label } from "@/components/ui";
import Image from "next/image";
import google from "/public/Google.svg";
import Link from "next/link";
import { signIn } from "next-auth/react";

export const LoginForm = () => {
  const form = useForm<TFormLoginValues>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = form;

  const onSubmit = async (data: TFormLoginValues) => {
    try {
      const response = await signIn("credentials", {
        ...data,
        redirect: false,
      });

      if (!response?.ok) {
        throw Error();
      }
    } catch (error) {
      setError("root.serverError", {
        type: "manual",
        message: "An unexpected error occurred. Please try again.",
      });
      console.error("Error [Login]", error);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={"w-[320px] mx-auto mt-32 flex flex-col gap-6"}
      >
        <div className={"google-sign-in w-full"}>
          <Button
            onClick={() =>
              signIn("google", { callbackUrl: "/", redirect: false })
            }
            className={
              "border border-[#B6B7BC] rounded-[4px] py-3 px-6 flex gap-2 bg-white w-full"
            }
          >
            <Image width={24} height={24} src={google} alt={"Google"} />
            <span className={" text-[#5C5F6A] font-medium"}>
              Continue with Google
            </span>
          </Button>
        </div>
        <div className={"divider w-full flex items-center gap-4"}>
          <div className={"border border-[#E6E7E8] h-0 w-[136px]"} />
          <span
            className={"text-sm font-medium tracking-widest text-[#5C5F6A]"}
          >
            OR
          </span>
          <div className={"border border-[#E6E7E8] h-0 w-[136px]"} />
        </div>
        <div className={"inputs flex flex-col gap-[15px]"}>
          <div className={"flex flex-col gap-2"}>
            <Label className={"font-medium text-[14px] text-[#474B57]"}>
              Email
            </Label>
            <Input
              type={"email"}
              className={"border-[#E6E7E8] py-[10px] px-[15px] rounded-[6px]"}
              {...register("email")}
            />
          </div>
          <div className={"flex flex-col gap-2"}>
            <Label className={"font-medium text-[14px] text-[#474B57]"}>
              Password
            </Label>
            <Input
              type={"password"}
              className={"border-[#E6E7E8] py-[10px] px-[15px] rounded-[6px]"}
              {...register("password")}
            />
          </div>
        </div>
        <Link
          href={"/forgot-password"}
          className={
            "text-sm leading-6 text-[#474B57] font-medium w-fit ml-auto hover:text-black"
          }
        >
          Forgot Password?
        </Link>
        <Button
          type={"submit"}
          disabled={isSubmitting}
          className={
            "bg-[#0E1422] text-white hover:bg-white hover:text-[#0E1422] border border-[#0E1422] rounded-[4px] py-3 px-6"
          }
        >
          {isSubmitting ? "Logging in..." : "Login"}
        </Button>
        <div
          className={
            "flex items-center justify-center gap-2 text-[#5C5F6A] text-[14px] font-[400]"
          }
        >
          Don't have an account?
          <Link href={"/register"} className={"hover:text-black"}>
            Sign up
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};
