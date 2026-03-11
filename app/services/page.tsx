import Link from "next/link";
import RelatedLinks from "../components/related-links";
import { buildPageMetadata } from "../lib/seo";
import { relatedSections } from "../lib/content";

export const metadata = buildPageMetadata({
  title: "С чем я работаю",
  description:
    "Темы, с которыми чаще всего обращаются в индивидуальную психотерапию: тревога, отношения, кризисы, самооценка и внутренние конфликты.",
  path: "/services",
});

const workItems = [
  {
    title: "Тревога и внутреннее напряжение",
    description:
      "Когда трудно расслабиться, выдерживать неопределённость и чувствовать внутреннюю опору.",
  },
  {
    title: "Трудности в отношениях",
    description:
      "Конфликты, болезненная близость, страх отвержения и повторяющиеся сложности с партнёрами и близкими.",
  },
  {
    title: "Повторяющиеся жизненные сценарии",
    description:
      "Когда в разных отношениях и обстоятельствах снова происходит что-то очень похожее.",
  },
  {
    title: "Кризисы и сложные переходы",
    description:
      "Расставания, потери, выгорание, смена роли, жизненные переломы и периоды неопределённости.",
  },
  {
    title: "Чувство пустоты и одиночества",
    description:
      "Когда внутри мало смысла, тепла, связи с собой или ощущения живости.",
  },
  {
    title: "Самооценка, стыд и вина",
    description:
      "Жёсткая самокритика, ощущение собственной несостоятельности и трудность опираться на себя.",
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="bg-[#f3efe8] text-stone-800">
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-12">
          <p className="text-xs uppercase tracking-[0.22em] text-stone-500">
            Направления работы
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-medium tracking-tight md:text-5xl">
            С чем можно обратиться в терапию
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            Необязательно иметь «правильный запрос» или точный диагноз. Часто
            человек приходит с внутренней спутанностью, усталостью, напряжением
            или повторяющимися сложностями в отношениях и жизненных выборах.
          </p>
        </div>
      </section>

      <section aria-labelledby="work-section-title">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-12">
          <h2
            id="work-section-title"
            className="max-w-3xl text-3xl font-medium tracking-tight md:text-4xl"
          >
            Темы, которые мы можем исследовать в совместной работе
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {workItems.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-stone-300/90 bg-[#f6f2eb] p-7"
              >
                <h3 className="text-2xl font-medium leading-tight text-stone-800">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-stone-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#efe8dd]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-14 md:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div>
            <h2 className="text-2xl font-medium tracking-tight md:text-3xl">
              Если пока трудно сформулировать, что именно происходит
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-stone-600 md:text-lg">
              Это нормально. Первая встреча может быть пространством, где вы
              спокойно расскажете о текущем состоянии, а мы вместе проясним,
              подходит ли вам такой формат помощи.
            </p>
          </div>

          <Link
            href="/contacts"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#1f1c18] px-6 text-sm font-medium text-[#f7f3ec] transition hover:bg-[#2b2621]"
          >
            Связаться и записаться
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10 md:pb-20 lg:px-12">
        <RelatedLinks
          title="Полезно посмотреть дальше"
          items={relatedSections.filter((item) => item.href !== "/services")}
        />
      </section>
    </main>
  );
}
