import { type NextRequest, NextResponse } from "next/server";
import { authClient } from "./lib/auth";

const authRoutes = ["/login", "/register"];

export default async function proxy(request: NextRequest) {
  const pathName = request.nextUrl.pathname;
  const isAuthPages = authRoutes.includes(pathName);
  const isDashboardPages = pathName.startsWith("/dashboard");

  const { data } = await authClient.getSession({
    fetchOptions: { headers: request.headers },
  });

  if (isAuthPages) {
    if (!data?.session) {
      return NextResponse.next();
    }
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isDashboardPages) {
    if (!data?.session || data.user.role !== "admin") {
      return NextResponse.redirect(new URL("/forbidden", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*.(?:png|svg)$).*)"],
};
