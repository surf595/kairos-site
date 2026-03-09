import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const navItems = [
  { href: "/", label: "Главная" },
  { href: "/about", label: "Обо мне" },
  { href: "/services", label: "С чем работаю" },
  { href: "/format", label: "Формат работы" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacts", label: "Контакты" },
];

export const metadata: Metadata = {
  title: "Психотерапевт в Таллине — Kairos",
  description: "Индивидуальная психотерапия в Таллине и онлайн.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <div className="min-h-screen bg-[#f6f2ea] text-[#2f3331]">
          <header className="border-b border-[#2f3331]/10 bg-[#f6f2ea]/95">
            <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-5 md:px-10">
              <Link href="/" className="text-lg font-medium tracking-wide text-[#252a27]">
                Kairos
              </Link>
              <nav aria-label="Основная навигация" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#4b514c]">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="transition hover:text-[#252a27]">
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          {children}

          <footer className="mt-16 border-t border-[#2f3331]/10 bg-[#f3eee6]">
            <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10">
              <div className="space-y-3">
                <h2 className="text-base font-medium">Навигация</h2>
                <ul className="space-y-2 text-sm text-[#4b514c]">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="transition hover:text-[#252a27]">
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 text-sm text-[#4b514c]">
                <h2 className="text-base font-medium text-[#2f3331]">Контакты</h2>
                <p>
                  Телефон
                  <br />
                  <a href="tel:+3725093008" className="text-[#2f3331] hover:underline">
                    +372 50 93008
                  </a>
                </p>
                <p>
                  Адрес
                  <br />
                  Tatari 56
                  <br />
                  кабинет 308
                  <br />
                  Tallinn, Estonia
                </p>
              </div>

              <div className="space-y-3 text-sm text-[#4b514c]">
                <h2 className="text-base font-medium text-[#2f3331]">Юридическая информация</h2>
                <p>
                  Kairos Therapy OÜ
                  <br />
                  Registry code: 123456
                </p>
                <div className="flex gap-4">
                  <Link href="/privacy" className="hover:underline">
                    Privacy
                  </Link>
                  <Link href="/terms" className="hover:underline">
                    Terms
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
