"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "Обо мне" },
  { href: "/services", label: "С чем я работаю" },
  { href: "/format", label: "Формат работы" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacts", label: "Контакты" },
];

export default function MobileHeader() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <header className="sticky top-0 z-50 border-b border-[var(--border-soft)] bg-[rgba(244,238,229,0.92)] backdrop-blur-xl">
        <div className="mx-auto flex h-[74px] max-w-[var(--container)] items-center justify-between px-4">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--accent-soft)] bg-[var(--bg-panel)] text-[var(--accent-warm)] shadow-[var(--shadow-soft)]">
              <span className="font-serif text-lg font-semibold">K</span>
            </div>

            <div className="min-w-0 leading-tight">
              <div className="truncate font-serif text-[1.12rem] font-semibold text-[var(--ink-main)]">
                Kairos Therapy
              </div>
              <div className="truncate text-[10px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                Частная практика
              </div>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="btn-secondary px-5"
          >
            {open ? "Закрыть" : "Меню"}
          </button>
        </div>

        {open && (
          <div className="border-t border-[var(--border-soft)] bg-[var(--bg-soft)]">
            <div className="mx-auto max-w-[var(--container)] px-4 py-4">
              <nav className="grid gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-3 text-[15px] text-[var(--ink-soft)] transition hover:bg-[var(--bg-panel)] hover:text-[var(--ink-main)]"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  href="/contacts"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-2"
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
