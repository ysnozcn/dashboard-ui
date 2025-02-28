/* eslint-disable @typescript-eslint/no-explicit-any */
import { authOptions } from "@/configs/auth";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
