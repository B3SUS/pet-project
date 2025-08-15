import { DefaultJWT, DefaultSession } from "next-auth";
import { UserRole } from "@prisma/client";
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: UserRole;
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: UserRole;
  }
}
declare module "next-auth/jwt" {
  import { UserRole } from "@prisma/client";

  interface JWT extends DefaultJWT {
    id: string;
    role: UserRole;
    fullName?: string | null;
  }
}
