import withAuth from "next-auth/middleware"
import { NextResponse } from "next/server"


export default withAuth(


    function middleware(req) {

        if (req.nextUrl.pathname.startsWith('/admin') && req.nextauth.token.role !== 'ADMIN') {
            return NextResponse.redirect(new URL('/404', req.url))
        }

    }


)

export const config = { matcher: ['/users', '/products', '/admin/:path*',] }