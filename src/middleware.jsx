export { default } from "next-auth/middleware";
import { NextResponse } from "next/server";

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/application/:path*",
};
