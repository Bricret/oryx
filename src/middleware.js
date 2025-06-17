// middleware.js
import { NextResponse } from "next/server";

const supportedLanguages = ["es", "en"];
const defaultLanguage = "es";

function getPreferredLanguage(acceptLanguage) {
  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, q] = lang.split(";q=");
      return {
        code: code.split("-")[0].toLowerCase(),
        q: q ? Number.parseFloat(q) : 1,
      };
    })
    .sort((a, b) => b.q - a.q);

  for (const lang of languages) {
    if (supportedLanguages.includes(lang.code)) {
      return lang.code;
    }
  }

  return defaultLanguage;
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname;

  // Excluir explícitamente archivos estáticos y rutas especiales
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") || // Cualquier archivo con extensión
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  // Si ya está en una ruta de idioma, no hacer nada
  if (
    pathname.startsWith(`/${supportedLanguages[0]}`) ||
    pathname.startsWith(`/${supportedLanguages[1]}`)
  ) {
    return NextResponse.next();
  }

  // Verificar cookie de idioma
  const cookieLang = request.cookies.get("lang")?.value;

  if (cookieLang) {
    const langLower = cookieLang.toLowerCase();
    if (supportedLanguages.includes(langLower)) {
      return NextResponse.redirect(
        new URL(`/${langLower}${pathname}`, request.url)
      );
    }
  }

  // Obtener idioma del navegador
  const acceptLanguage =
    request.headers.get("Accept-Language") || defaultLanguage;
  const preferredLang = getPreferredLanguage(acceptLanguage);

  // Redirigir al idioma detectado
  return NextResponse.redirect(
    new URL(`/${preferredLang}${pathname}`, request.url)
  );
}

export const config = {
  matcher: [
    "/",
    "/((?!api|_next/static|_next/image|_next/webpack-hmr|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
