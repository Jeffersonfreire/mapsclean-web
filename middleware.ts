import createMiddleware from 'next-intl/middleware';
import intlConfig from './next-intl.config';

export default createMiddleware(intlConfig as any);

export const config = {
  matcher: [
    '/',
    '/(fr-BE|pt-BR|en)/:path*'
  ]
};

