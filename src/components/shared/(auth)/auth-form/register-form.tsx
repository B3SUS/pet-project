"use client";
import { FormProvider, useForm } from "react-hook-form";
import {
  formRegisterSchema,
  TFormRegisterValues,
} from "@/components/shared/(auth)/auth-form/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Label } from "@/components/ui";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { registerUser } from "@/app/actions";

export const RegisterForm = () => {
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = form;

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      const result = await registerUser({
        email: data.email,
        full_name: data.full_name,
        password: data.password,
        role: "USER",
      });

      if (result.success) {
        await signIn("credentials", {
          email: data.email,
          password: data.password,
          redirect: false,
          callbackUrl: "/",
        });
      }
      window.location.href = "/";
    } catch (error) {
      setError("root.serverError", {
        type: "manual",
        message:
          "An unexpected error occurred during registration. Please try again.",
      });
      console.error("Error [Register]", error);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={"w-[320px] mx-auto mt-32 flex flex-col gap-6"}
      >
        <div className={"inputs flex flex-col gap-[15px]"}>
          <div className={"flex flex-col gap-2"}>
            <Label className={"font-medium text-[14px] text-[#474B57]"}>
              Full Name
            </Label>
            <Input
              type={"text"}
              className={"border-[#E6E7E8] py-[10px] px-[15px] rounded-[6px]"}
              {...register("full_name")}
            />
          </div>
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
          <div className={"flex flex-col gap-2"}>
            <Label className={"font-medium text-[14px] text-[#474B57]"}>
              Confirm password
            </Label>
            <Input
              type={"password"}
              className={"border-[#E6E7E8] py-[10px] px-[15px] rounded-[6px]"}
              {...register("confirmPassword")}
            />
          </div>
        </div>
        <Button
          type={"submit"}
          disabled={form.formState.isSubmitting}
          className={
            "bg-[#0E1422] text-white hover:bg-white hover:text-[#0E1422] border border-[#0E1422] rounded-[4px] py-3 px-6"
          }
        >
          {isSubmitting ? "Signing up..." : "Sign up"}
        </Button>
        <div
          className={
            "flex items-center justify-center gap-2 text-[#5C5F6A] text-[14px] font-[400]"
          }
        >
          Already have an account?
          <Link href={"/login"} className={"hover:text-black"}>
            Sign in
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};
