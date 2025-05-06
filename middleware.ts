import { NextRequest, NextResponse } from 'next/server';
import { fallbackLng, languages } from './app/i18n/settings';

export function middleware(request: NextRequest): NextResponse | undefined {
    // Chemin de la requête
    const pathname = request.nextUrl.pathname;

    // Ignorer les ressources statiques
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.') ||
        pathname === '/favicon.ico'
    ) {
        return;
    }

    // Vérifier si le chemin contient déjà une locale
    const pathnameHasLocale = languages.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Rediriger vers la locale par défaut si aucune locale n'est présente
    const locale = fallbackLng;
    const newUrl = new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url);

    return NextResponse.redirect(newUrl);
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\.).*)'],
};
