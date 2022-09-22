/*
 * @Author: W·S
 * @Date: 2022-09-19 12:31:50
 * @LastEditors: W·S
 * @LastEditTime: 2022-09-19 12:40:12
 * @Description: Description
 */

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );
  return response;
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/demo/:path*",
};
