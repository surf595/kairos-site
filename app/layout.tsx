import type { Metadata } from "next";
import Link from "next/link";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import MobileHeader from "./mobile-header";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
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
    <html lang="ru" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="min-h-screen bg-[#F3EEE6] font-sans text-[#26231F] antialiased">
        <div className="relative min-h-screen overflow-x-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.55),transparent_32%),linear-gradient(180deg,#F5F1EA_0%,#F3EEE6_45%,#EFE7DC_100%)]" />
          <div className="pointer-events-none fixed inset-0 -z-10 opacity-[0.04] [background-image:radial-gradient(#000_0.7px,transparent_0.7px)] [background-size:8px_8px]" />

          <MobileHeader />

          <header className="sticky top-0 z-50 hidden border-b border-black/8 bg-[#F3EEE6]/88 backdrop-blur-xl lg:block">
            <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 md:px-10 lg:px-12">
              <Link href="/" className="group flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D2C5B5] bg-[#F8F4EE] text-[#6E5C49] shadow-[0_8px_24px_rgba(92,72,46,0.06)] transition group-hover:-translate-y-0.5">
                  <span className="font-serif text-xl font-semibold">K</span>
                </div>

                <div className="leading-tight">
                  <div className="font-serif text-[1.35rem] font-semibold tracking-[0.01em] text-[#1E1C19]">
                    Kairos Therapy
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.24em] text-[#8B7D6D]">
                    Частная практика
                  </div>
                </div>
              </Link>

              <nav className="hidden items-center gap-7 lg:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[15px] text-[#5D554C] transition hover:text-[#1F1C18]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <Link
                  href="/contacts"
                  className="hidden h-11 items-center justify-center rounded-full border border-[#CFC2B2] bg-[#FBF8F3]/85 px-5 text-sm font-medium text-[#2A2722] transition hover:-translate-y-0.5 hover:border-[#B8A893] md:inline-flex"
                >
                  Связаться
                </Link>

                <Link
                  href="/contacts"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#171614] px-5 text-sm font-medium text-[#F7F3EC] transition hover:-translate-y-0.5 hover:bg-[#27231F]"
                >
                  Записаться
                </Link>
              </div>
            </div>
          </header>

          {children}

          <footer className="border-t border-black/10 bg-[#ECE3D7]">
            <div className="mx-auto max-w-7xl px-6 py-14 md:px-10 lg:px-12">
              <div className="grid gap-10 md:gap-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
                <div>
                  <div className="font-serif text-3xl font-semibold text-[#1F1C18]">
                    Kairos Therapy
                  </div>
                  <p className="mt-4 max-w-md text-[15px] leading-7 text-[#5D554C]">
                    Частная психотерапевтическая практика в Таллине. Спокойное
                    пространство для внутренней работы, понимания себя и
                    постепенного осмысления жизненных трудностей.
                  </p>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[#8A7D6E]">
                    Разделы
                  </div>
                  <div className="mt-5 grid gap-4 text-[15px] leading-7 text-[#5D554C]">
                    <Link href="/" className="transition hover:text-[#1F1C18]">
                      Главная
                    </Link>
                    <Link
                      href="/about"
                      className="transition hover:text-[#1F1C18]"
                    >
                      Обо мне
                    </Link>
                    <Link
                      href="/services"
                      className="transition hover:text-[#1F1C18]"
                    >
                      С чем я работаю
                    </Link>
                    <Link
                      href="/format"
                      className="transition hover:text-[#1F1C18]"
                    >
                      Формат работы
                    </Link>
                    <Link
                      href="/faq"
                      className="transition hover:text-[#1F1C18]"
                    >
                      FAQ
                    </Link>
                    <Link
                      href="/contacts"
                      className="transition hover:text-[#1F1C18]"
                    >
                      Контакты
                    </Link>
                  </div>
                </div>

                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[#8A7D6E]">
                    Информация
                  </div>
                  <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#5D554C]">
                    <p>Таллин, Tatari 56, кабинет 308</p>
                    <p>reg. nr. 17338080</p>
                    <p>info@kairos.ee</p>
                    <p>+372 509 3008</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col gap-4 border-t border-black/8 pt-6 text-sm text-[#7B6F62] md:flex-row md:items-center md:justify-between">
                <p>© {new Date().getFullYear()} Kairos Therapy OÜ</p>
                <div className="flex flex-wrap gap-5">
                  <Link
                    href="/privacy"
                    className="transition hover:text-[#312D28]"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="transition hover:text-[#312D28]"
                  >
                    Terms & Conditions
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}