import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Формат работы — Kairos Therapy",
  description:
    "Как организована психотерапия: длительность сессии, регулярность встреч, очный и онлайн формат, стоимость и первые шаги.",
};

const items = [
  {
    title: "Индивидуальная работа",
    text: "Регулярные встречи один на один с терапевтом.",
  },
  {
    title: "Очно в Таллине",
    text: "Tatari 56, кабинет 308.",
  },
  {
    title: "Онлайн",
    text: "Сессии могут проходить по защищённой видеосвязи.",
  },
  {
    title: "Регулярность",
    text: "Обычно 1 раз в неделю, иногда 2 раза — по договорённости.",
  },
] as const;

export default function FormatPage() {
  return (
    <main className="bg-[#f5f1ea] text-stone-900">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20 lg:px-12">
          <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
            Формат работы
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-medium tracking-tight md:text-5xl">
            Спокойная и понятная организация терапии
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Сеттинг — это часть терапевтического процесса. Постоянство времени,
            места и договорённостей создаёт опору и помогает постепенно
            выдерживать и осмыслять внутренние переживания.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {items.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-stone-200 bg-white/80 p-6"
              >
                <h2 className="text-base font-medium text-stone-900">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-stone-200 bg-white/70 p-6 sm:p-7">
            <h2 className="text-xl font-medium text-stone-900">
              Базовые условия
            </h2>

            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-sm text-stone-500">Продолжительность</p>
                <p className="mt-1 text-lg font-medium text-stone-900">
                  50 минут
                </p>
              </div>

              <div>
                <p className="text-sm text-stone-500">Индивидуальная сессия</p>
                <p className="mt-1 text-lg font-medium text-stone-900">60 €</p>
              </div>

              <div>
                <p className="text-sm text-stone-500">Групповая терапия</p>
                <p className="mt-1 text-lg font-medium text-stone-900">25 €</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#ede6db]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-14 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <p className="max-w-3xl text-base leading-7 text-stone-700 md:text-lg">
            Если есть вопросы о правилах переноса, оплате или о том, как лучше
            начать, напишите через форму контактов — я отвечу и помогу выбрать
            ближайший удобный шаг.
          </p>
          <Link
            href="/contacts"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f1c18] px-6 text-sm font-medium text-[#f7f3ec] transition hover:bg-[#2b2621]"
          >
            Перейти к контактам
          </Link>
        </div>
      </section>
    </main>
  );
}
