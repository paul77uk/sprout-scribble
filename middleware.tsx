import { NextResponse } from "next/server";

const middleware = (request: NextResponse) => {
  return NextResponse.redirect(new URL('/', request.url));
};
export default middleware;

export const config = {
  matcher: "/about/:path*",
};
