import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Психотерапевт в Таллине — Kairos",
  description: "Индивидуальная психотерапия в Таллине и онлайн.",
};

export default function FormatPage() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-10 px-6 py-12 md:px-10 md:py-16">
      <h1 className="text-4xl font-medium md:text-5xl">Формат работы</h1>
      <ul className="grid gap-4 text-lg md:grid-cols-2">
        <li className="rounded-2xl border border-[#2f3331]/10 bg-[#f8f4ed]/75 p-6">Индивидуальная психотерапия</li>
        <li className="rounded-2xl border border-[#2f3331]/10 bg-[#f8f4ed]/75 p-6">Очно в Таллине</li>
        <li className="rounded-2xl border border-[#2f3331]/10 bg-[#f8f4ed]/75 p-6">Онлайн</li>
        <li className="rounded-2xl border border-[#2f3331]/10 bg-[#f8f4ed]/75 p-6">Регулярные встречи</li>
      </ul>
      <p className="text-lg text-[#49504a]">Сессия длится 50 минут.</p>
    </main>
  );
}
