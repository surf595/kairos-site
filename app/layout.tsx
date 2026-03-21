import type { Metadata } from "next";
import Link from "next/link";
import { Manrope, Spectral } from "next/font/google";
import "./globals.css";
import MobileHeader from "./mobile-header";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const spectral = Spectral({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kairos Therapy — Психотерапия в Таллине",
  description:
    "Частная психотерапевтическая практика в Таллине. Индивидуальная работа для взрослых: очно и онлайн.",
};

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "Обо мне" },
  { href: "/services", label: "С чем я работаю" },
  { href: "/format", label: "Формат работы" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacts", label: "Контакты" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${manrope.variable} ${spectral.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <div className="page-shell relative min-h-screen overflow-x-hidden">
          <MobileHeader />

          <header className="sticky top-0 z-50 hidden border-b border-[var(--border-soft)] bg-[rgba(244,238,229,0.9)] backdrop-blur-xl lg:block">
            <div className="mx-auto flex h-[76px] max-w-[var(--container)] items-center justify-between px-6 xl:px-10">
              <Link href="/" className="group flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--accent-soft)] bg-[var(--bg-panel)] text-[var(--accent-warm)] shadow-[var(--shadow-soft)] transition group-hover:-translate-y-0.5">
                  <span className="font-serif text-xl font-semibold">K</span>
                </div>

                <div className="leading-tight">
                  <div className="font-serif text-[1.35rem] font-semibold tracking-[0.01em] text-[var(--ink-main)]">
                    Kairos Therapy
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-[var(--ink-muted)]">
                    Частная практика
                  </div>
                </div>
              </Link>

              <nav className="hidden items-center gap-7 lg:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[15px] text-[var(--ink-soft)] transition hover:text-[var(--ink-main)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <Link href="/contacts" className="btn-secondary hidden md:inline-flex">
                  Связаться
                </Link>
                <Link href="/contacts" className="btn-primary">
                  Записаться
                </Link>
              </div>
            </div>
          </header>

          {children}

          <footer className="border-t border-[var(--border-soft)] bg-[var(--bg-deep)]">
            <div className="mx-auto max-w-[var(--container)] px-6 py-14 md:px-10 lg:px-12">
              <div className="grid gap-10 md:gap-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
                <div>
                  <div className="font-serif text-3xl font-semibold text-[var(--ink-main)]">
                    Kairos Therapy
                  </div>
                  <p className="mt-4 max-w-md text-[15px] leading-7 text-[var(--ink-soft)]">
                    Частная психотерапевтическая практика в Таллине. Спокойное
                    пространство для внутренней работы, понимания себя и
                    постепенного осмысления жизненных трудностей.
                  </p>
                </div>

                <div>
                  <div className="eyebrow">Разделы</div>
                  <div className="mt-5 grid gap-4 text-[15px] leading-7 text-[var(--ink-soft)]">
                    {navItems.map((item) => (
                      <Link key={item.href} href={item.href} className="transition hover:text-[var(--ink-main)]">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="eyebrow">Контакты</div>
                  <div className="mt-5 space-y-2 text-[15px] leading-7 text-[var(--ink-soft)]">
                    <p>Tatari 56, кабинет 308, Tallinn</p>
                    <p>+372 509 3008</p>
                    <p>info@kairos.ee</p>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-4 text-sm text-[var(--ink-muted)]">
                    <Link href="/privacy" className="transition hover:text-[var(--ink-main)]">
                      Политика конфиденциальности
                    </Link>
                    <Link href="/terms" className="transition hover:text-[var(--ink-main)]">
                      Условия использования
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
