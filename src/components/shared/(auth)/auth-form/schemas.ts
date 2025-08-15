import { z } from "zod";
export const passwordSchema = z
  .string()
  .min(6, { message: "Password must contain at least 6 symbols" });
export const formLoginSchema = z.object({
  email: z.string().email({ message: "Input correct email" }),
  password: passwordSchema,
});

export const formRegisterSchema = formLoginSchema
  .merge(
    z.object({
      full_name: z.string().min(2, { message: "Input full name" }),
      confirmPassword: passwordSchema,
    }),
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password don`t match",
    path: ["confirmPassword"],
  });

export type TFormLoginValues = z.infer<typeof formLoginSchema>;
export type TFormRegisterValues = z.infer<typeof formRegisterSchema>;
