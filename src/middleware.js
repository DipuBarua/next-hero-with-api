import { cookies } from "next/headers";
import { NextResponse } from "next/server"

export const middleware = async (request) => {

    const token = cookies(request).get("next-auth.session-token");
    // console.log(token);

    if (!token) {
        return NextResponse.redirect(new URL("/api/auth/signin", request.url))
    }
    return NextResponse.next();
}

//matcher allows you to filter Middleware to run on specific paths.
export const config = {
    matcher: ['/dashboard', '/about', '/gallery']
}