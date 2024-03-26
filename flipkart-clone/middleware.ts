import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_JWT_SECRET,
  });

  // Preventing the user to access the /cart route
  if (path === '/cart' && !token) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.nextUrl));
  }

  if (path === '/profile' && !token) {
    return NextResponse.redirect(new URL('/api/auth/signin', request.nextUrl));
  }

  if (path === '/signup' && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }

  // preventing the authenticated user to access the login page.
  if (path.includes('/login') && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/cart', '/login', '/profile', '/signup'],
};
