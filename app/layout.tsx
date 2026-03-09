import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Психотерапевт в Таллине — Kairos",
  description:
    "Индивидуальная психотерапия в Таллине и онлайн. Работа с тревогой, отношениями, внутренними конфликтами и повторяющимися жизненными сценариями.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
