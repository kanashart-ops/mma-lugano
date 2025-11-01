"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

const LABELS = {
  it: { home: "Home", why: "Perché noi", contact: "Contatti", schedule: "Orari", ig: "Instagram" },
  en: { home: "Home", why: "Why us",     contact: "Contacts", schedule: "Schedule", ig: "Instagram" },
  ru: { home: "Главная", why: "Почему мы", contact: "Контакты", schedule: "Расписание", ig: "Instagram" },
} as const;

const SCHEDULE_PATH = {
  it: "/orari",
  en: "/schedule",
  ru: "/raspisanie",
} as const;

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  const currentLocale = (pathname.split("/")[1] || "it") as keyof typeof LABELS;
  const pathWithoutLocale = pathname.replace(/^\/(it|en|ru)/, "") || "";
  const labels = LABELS[currentLocale];

  const locales = [
    { code: "it", label: "IT" },
    { code: "en", label: "EN" },
    { code: "ru", label: "RU" },
  ] as const;

  // Определяем, на странице расписания ли мы сейчас
  const isSchedule =
    pathWithoutLocale.startsWith(SCHEDULE_PATH.it) ||
    pathWithoutLocale.startsWith(SCHEDULE_PATH.en) ||
    pathWithoutLocale.startsWith(SCHEDULE_PATH.ru);

  // Функция выдаёт корректный путь под каждую локаль
  const hrefForLocale = (loc: typeof locales[number]["code"]) => {
    if (isSchedule) return `/${loc}${SCHEDULE_PATH[loc]}`;
    return `/${loc}${pathWithoutLocale}`;
  };

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href={`/${currentLocale}`} className="text-lg font-extrabold tracking-tight">
          MMA Lugano
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link href={`/${currentLocale}#home`} className="text-sm font-medium hover:text-black">{labels.home}</Link>
          <Link href={`/${currentLocale}#perche`} className="text-sm font-medium hover:text-black">{labels.why}</Link>
          <Link href={`/${currentLocale}#contatti`} className="text-sm font-medium hover:text-black">{labels.contact}</Link>
          <Link href={`/${currentLocale}${SCHEDULE_PATH[currentLocale]}`} className="text-sm font-medium hover:text-black">
            {labels.schedule}
          </Link>

          <a
            href="https://instagram.com/mmalugano"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm font-semibold"
          >
            <Instagram className="h-4 w-4" /> {labels.ig}
          </a>

          {/* Language switch (корректные пути для спец-роута расписания) */}
          <div className="flex items-center gap-2 border-l pl-4">
            {locales.map((loc) => (
              <Link
                key={loc.code}
                href={hrefForLocale(loc.code)}
                className={`text-sm ${loc.code === currentLocale ? "font-bold text-black" : "text-gray-500 hover:text-black"}`}
              >
                {loc.label}
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            <Link href={`/${currentLocale}#home`} className="py-2" onClick={() => setOpen(false)}>{labels.home}</Link>
            <Link href={`/${currentLocale}#perche`} className="py-2" onClick={() => setOpen(false)}>{labels.why}</Link>
            <Link href={`/${currentLocale}#contatti`} className="py-2" onClick={() => setOpen(false)}>{labels.contact}</Link>
            <Link href={`/${currentLocale}${SCHEDULE_PATH[currentLocale]}`} className="py-2" onClick={() => setOpen(false)}>
              {labels.schedule}
            </Link>
            <a href="https://instagram.com/mmalugano" target="_blank" rel="noreferrer" className="py-2 font-semibold" onClick={() => setOpen(false)}>
              {labels.ig}
            </a>

            <div className="mt-3 flex gap-3 border-t pt-3">
              {locales.map((loc) => (
                <Link
                  key={loc.code}
                  href={hrefForLocale(loc.code)}
                  className={`text-sm ${loc.code === currentLocale ? "font-bold text-black" : "text-gray-500 hover:text-black"}`}
                  onClick={() => setOpen(false)}
                >
                  {loc.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
