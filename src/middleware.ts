import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Verificar autenticação local para email autorizado
  const authBypass = req.cookies.get('auth_bypass')?.value === 'true';
  const authEmail = req.cookies.get('auth_email')?.value;
  const isAuthorizedBypass = authBypass && authEmail === 'victor.vasconcellos@hotmail.com';

  // Rotas protegidas
  const protectedRoutes = ['/dashboard', '/frases', '/analise'];
  const isProtectedRoute = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  // Redirecionar para login se não autenticado (nem via Supabase nem via bypass)
  if (isProtectedRoute && !session && !isAuthorizedBypass) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Redirecionar para dashboard se já autenticado e tentar acessar login/cadastro
  if ((req.nextUrl.pathname === '/login' || req.nextUrl.pathname === '/cadastro') && (session || isAuthorizedBypass)) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*', '/frases/:path*', '/analise/:path*', '/login', '/cadastro'],
};
