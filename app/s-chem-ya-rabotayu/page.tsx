import Link from "next/link";
import { topics } from "../lib/topics";

export const metadata = {
  title: "С чем я работаю",
  description:
    "Темы, с которыми я работаю в психотерапии: тревога, отношения, депрессивные состояния, самооценка, кризисы, границы и близость.",
};

export default function TopicsPage() {
  return (
    <main className="bg-[#F3EEE6] text-[#26231F]">
      <section className="border-b border-black/10 bg-[#F3EEE6]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="max-w-3xl">
             <p className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
  Направления работы
</p>

<h1 className="mt-4 max-w-[10ch] font-serif text-5xl leading-[1.08] text-[#2F2A26] sm:text-6xl">
  С чем я работаю
</h1>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[#5A534A] lg:justify-self-end lg:text-right">
              Люди приходят в терапию не только с «проблемой», но и с
              переживанием, которое бывает трудно назвать. Здесь собраны
              основные темы, с которыми я работаю в индивидуальной практике.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F1EBE2]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 lg:py-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {topics.map((topic) => (
              <article
                key={topic.slug}
                className="flex min-h-[360px] flex-col justify-between rounded-[30px] border border-[#D8CCBE] bg-[#F7F2EB]/88 p-8 shadow-[0_18px_45px_rgba(92,72,46,0.04)]"
              >
                <div>
                 <h2 className="font-serif text-[2rem] leading-[1.15] text-[#2F2A26]">
  {topic.title}
</h2>
<p className="mt-3 text-base leading-8 text-[#6A6258]">
  {topic.intro}
</p>

<div className="shrink-0 text-sm font-medium text-[#5F584F]">
  Открыть →
</div>
                </div>

                <Link
                  href={`/s-chem-ya-rabotayu/${topic.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#2E4443]"
                >
                  Открыть страницу
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}