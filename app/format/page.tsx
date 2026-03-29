import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Формат работы — Kairos Therapy",
  description:
    "Индивидуальные сессии 50 минут, очно в Таллине или онлайн. Стоимость: 60 € за сессию. Групповая терапия — 25 €.",
  alternates: {
    canonical: "/format",
  },
};

export default function FormatWorkSection() {
  const items = [
    {
      title: "Индивидуальная работа",
      text: "Индивидуальные встречи один на один с терапевтом.",
    },
    {
      title: "Очно в Таллине",
      text: "Tatari 56, кабинет 308",
    },
    {
      title: "Онлайн",
      text: "Сессии могут проходить по видеосвязи.",
    },
    {
      title: "Регулярность встреч",
      text: "Обычно 1–2 раза в неделю.",
    },
  ];

  return (
    <main className="bg-[#f5f1ea]">
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-stone-500">
            Формат работы
          </p>
          <h1 className="mt-3 text-3xl font-light tracking-tight text-stone-900 sm:text-4xl">
            Спокойная и понятная организация терапии
          </h1>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-stone-200 bg-white/80 p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              <h3 className="text-base font-medium text-stone-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-stone-200 bg-white/70 p-6 sm:p-7">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm text-stone-500">Продолжительность</p>
              <p className="mt-1 text-lg font-medium text-stone-900">
                50 минут
              </p>
            </div>

            <div>
              <p className="text-sm text-stone-500">Индивидуальная сессия</p>
              <p className="mt-1 text-lg font-medium text-stone-900">
                60 €
              </p>
            </div>

            <div>
              <p className="text-sm text-stone-500">Групповая терапия</p>
              <p className="mt-1 text-lg font-medium text-stone-900">
                25 €
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 rounded-2xl border border-stone-200 bg-[#EDE4D7] p-6 sm:p-8">
          <p className="max-w-xl text-base leading-7 text-stone-700">
            Сеттинг — это не формальность, а часть самой терапевтической
            работы. Постоянство времени, места и рамки встречи помогает
            создавать пространство, в котором возможно доверие и осмысление.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center rounded-full bg-[#26231F] px-6 py-3 text-sm font-medium text-[#F7F3EC] transition hover:bg-[#3a3530]"
            >
              Написать мне
            </Link>
            <Link
              href="/faq"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              Частые вопросы
            </Link>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
}