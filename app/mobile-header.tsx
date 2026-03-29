"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "С чем я работаю" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "Обо мне" },
  { href: "/contacts", label: "Контакты" },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <header className="sticky top-0 z-50 border-b border-black/8 bg-[#F3EEE6]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#D2C5B5] bg-[#F8F4EE] text-[#6E5C49] shadow-[0_8px_24px_rgba(92,72,46,0.06)]">
              <span className="font-serif text-xl font-semibold">K</span>
            </div>

            <div className="min-w-0 leading-tight">
              <div className="truncate font-serif text-[1.15rem] font-semibold tracking-[0.01em] text-[#1E1C19]">
                Kairos Therapy
              </div>
              <div className="truncate text-[10px] uppercase tracking-[0.24em] text-[#8B7D6D]">
                Частная практика
              </div>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#CFC2B2] bg-[#FBF8F3]/85 px-5 text-sm font-medium text-[#2A2722] transition hover:border-[#B8A893]"
          >
            {open ? "Закрыть" : "Меню"}
          </button>
        </div>

        {open && (
          <div className="border-t border-black/6 bg-[#F6F1EA]">
            <div className="mx-auto max-w-7xl px-4 py-4">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-[15px] text-[#4F4942] transition hover:bg-[#FBF8F3] hover:text-[#1F1C18]"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/contacts"
                  onClick={() => setOpen(false)}
                  className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-[#171614] px-5 text-sm font-medium text-[#F7F3EC] transition hover:bg-[#27231F]"
                >
                  Записаться
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}