import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["it", "en", "ru"] as const;
const defaultLocale = "it";

// Расширения статических файлов из /public
const staticFileExt = /\.(?:png|jpg|jpeg|gif|webp|avif|svg|ico|txt|xml|json|mp4|webm|mp3|woff2?|ttf|eot)$/i;

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1) Пропускаем системные и уже локализованные пути
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/assets") ||
    pathname.startsWith("/favicon") ||
    locales.some((l) => pathname.startsWith(`/${l}`))
  ) {
    return NextResponse.next();
  }

  // 2) Пропускаем статику из /public (например /images/hero.jpg)
  if (pathname.startsWith("/images") || staticFileExt.test(pathname)) {
    return NextResponse.next();
  }

  // 3) Все остальное редиректим на /it
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}
