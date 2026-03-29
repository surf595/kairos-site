import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "С чем я работаю — Kairos Therapy",
  description:
    "Направления работы: тревога, трудности в отношениях, депрессивные состояния, кризисы, самооценка и стыд. Индивидуальная психотерапия в Таллине.",
  alternates: {
    canonical: "/services",
  },
};

const workItems = [
  {
    slug: "trevoga",
    title: "Тревога и внутреннее напряжение",
    description:
      "Когда трудно расслабиться, выдерживать неопределённость и чувствовать внутреннюю опору.",
  },
  {
    slug: "otnosheniya",
    title: "Трудности в отношениях",
    description:
      "Конфликты, болезненная близость, страх отвержения и повторяющиеся сложности с партнёрами и близкими.",
  },
  {
    slug: "depressivnye-sostoyaniya",
    title: "Депрессивные состояния",
    description:
      "Когда становится трудно чувствовать интерес, энергию, смысл и внутреннее движение.",
  },
  {
    slug: "krizisy-i-perekhody",
    title: "Кризисы и сложные переходы",
    description:
      "Расставания, потери, выгорание, смена роли, жизненные переломы и периоды неопределённости.",
  },
  {
    slug: "samootsenka-i-styd",
    title: "Самооценка, стыд и внутренний критик",
    description:
      "Жёсткая самокритика, ощущение собственной несостоятельности и трудность опираться на себя.",
  },
  {
    slug: "granitsy-i-blizost",
    title: "Границы и близость",
    description:
      "Когда трудно быть рядом с другим, не теряя себя, или наоборот — трудно подпустить кого-то близко.",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="bg-[#f3efe8] text-[#26231F]">
      <section aria-labelledby="services-title">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.18em] text-[#8A7E70]">
              Направления работы
            </p>

            <h1
              id="services-title"
              className="text-4xl font-medium tracking-tight text-[#1E1C19] md:text-5xl"
            >
              С чем ко мне обращаются
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#5A534A] md:text-lg">
              В терапию часто приходят не только с конкретной проблемой, но и с
              ощущением, что в жизни что-то повторяется, застревает или теряет
              смысл. Для обращения не нужен диагноз — достаточно того, что
              становится тяжело.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
            {workItems.map((item) => (
              <Link
                key={item.slug}
                href={`/s-chem-ya-rabotayu/${item.slug}`}
                className="group rounded-[28px] border border-[#D9CEC0] bg-[#f6f2eb] p-7 transition duration-300 hover:-translate-y-0.5 hover:border-[#C8B9A6] hover:bg-[#f8f5ef] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              >
                <h2 className="text-xl font-medium leading-tight text-[#1E1C19] md:text-2xl">
                  {item.title}
                </h2>

                <p className="mt-4 text-[15px] leading-7 text-[#5A534A]">
                  {item.description}
                </p>

                <p className="mt-5 text-sm text-[#8A7E70] transition group-hover:text-[#5A534A]">
                  Подробнее →
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-[28px] border border-[#D9CEC0] bg-[#EDE4D7] p-8 md:p-10">
            <p className="max-w-2xl text-lg leading-8 text-[#5A534A]">
              Если вашей темы нет в списке — это не значит, что с ней не
              обращаются. Напишите мне, и мы разберёмся вместе.
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
                className="inline-flex items-center justify-center rounded-full border border-[#C8BAA8] px-6 py-3 text-sm font-medium text-[#5A534A] transition hover:bg-[#E5DBCD]"
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
