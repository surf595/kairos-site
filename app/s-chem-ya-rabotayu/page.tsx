import type { Metadata } from "next";
import Link from "next/link";
import { topics } from "../lib/topics";

export const metadata: Metadata = {
  title: "С чем я работаю — Kairos Therapy",
  description:
    "Темы, с которыми я работаю в психотерапии: тревога, отношения, депрессивные состояния, самооценка, кризисы, границы и близость.",
  alternates: {
    canonical: "/s-chem-ya-rabotayu",
  },
};

export default function TopicsPage() {
  return (
    <main className="bg-[#F3EEE6] text-[#26231F]">
      <section className="border-b border-black/10 bg-[#F3EEE6]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
                Направления работы
              </p>
              <h1 className="mt-4 font-serif text-5xl leading-[1.08] text-[#2F2A26] sm:text-6xl">
                С чем я работаю
              </h1>
            </div>

            <p className="max-w-2xl text-lg leading-8 text-[#5A534A] lg:justify-self-end lg:text-right">
              Люди приходят в терапию не только с «проблемой», но и с
              переживанием, которое бывает трудно назвать. Здесь собраны
              основные темы, с которыми я работаю в индивидуальной практике.
              Для обращения не нужен диагноз — достаточно того, что становится
              тяжело.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F1EBE2]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-12 lg:py-20">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/s-chem-ya-rabotayu/${topic.slug}`}
                className="group flex min-h-[360px] flex-col justify-between rounded-[30px] border border-[#D8CCBE] bg-[#F7F2EB]/88 p-8 shadow-[0_18px_45px_rgba(92,72,46,0.04)] transition duration-300 hover:-translate-y-[2px] hover:border-[#C5B29C] hover:bg-[#FBF7F1]"
              >
                <div>
                  <h2 className="font-serif text-[2rem] leading-[1.15] text-[#2F2A26]">
                    {topic.title}
                  </h2>
                  <p className="mt-3 text-base leading-8 text-[#6A6258]">
                    {topic.intro}
                  </p>
                </div>

                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#2E4443]">
                  Открыть
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
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
