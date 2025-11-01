"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="#home" className="text-lg font-extrabold tracking-tight">
          MMA Lugano
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="#home" className="text-sm font-medium hover:text-black">
            Home
          </Link>
          <Link href="#perche" className="text-sm font-medium hover:text-black">
            Perché noi
          </Link>
          <Link href="#contatti" className="text-sm font-medium hover:text-black">
            Contatti
          </Link>
          <a
            href="https://instagram.com/mmalugano"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border px-3 py-2 text-sm font-semibold"
          >
            <Instagram className="h-4 w-4" /> Instagram
          </a>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Apri menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            <Link href="#home" className="py-2 text-base font-medium" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="#perche" className="py-2 text-base font-medium" onClick={() => setOpen(false)}>
              Perché noi
            </Link>
            <Link href="#contatti" className="py-2 text-base font-medium" onClick={() => setOpen(false)}>
              Contatti
            </Link>
            <a
              href="https://instagram.com/mmalugano"
              target="_blank"
              rel="noreferrer"
              className="py-2 text-base font-semibold"
              onClick={() => setOpen(false)}
            >
              Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
