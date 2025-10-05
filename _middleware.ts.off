import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Se já tem locale, deixa passar
  if (pathname.startsWith('/fr-BE') || pathname.startsWith('/pt-BR') || pathname.startsWith('/en')) {
    return NextResponse.next();
  }
  
  // Se é raiz ou sem locale, redireciona para fr-BE
  if (pathname === '/' || (!pathname.startsWith('/_next') && !pathname.includes('.'))) {
    const locale = 'fr-BE';
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|assets).*)',
  ]
};

