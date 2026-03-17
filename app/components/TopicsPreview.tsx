import Link from "next/link";
import { topics } from "../lib/topics";

export default function TopicsPreview() {
  const previewTopics = topics.slice(0, 6);

  return (
    <section className="border-y border-black/10 bg-[#F1EBE2]">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="max-w-2xl">
           <p className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
  Направления работы
</p>

<h2 className="mt-4 max-w-[10ch] font-serif text-4xl leading-[1.08] text-[#2F2A26] sm:text-5xl">
  С чем я работаю
</h2>

<p className="mt-8 max-w-md text-lg leading-8 text-[#6A6258]">
  На терапии не всегда сразу понятно, как назвать то, что происходит.
  Ниже — основные темы, с которыми люди чаще всего приходят в работу.
</p>

            <Link
              href="/s-chem-ya-rabotayu"
              className="inline-flex items-center gap-2 rounded-full border border-[#CFC3B4] bg-[#F7F2EB]/80 px-6 py-3 text-sm font-medium text-[#2E4443] transition hover:border-[#BCA993] hover:bg-[#FBF7F1]"
            >
              Все направления
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {previewTopics.map((topic) => (
            <Link
              key={topic.slug}
              href={`/s-chem-ya-rabotayu/${topic.slug}`}
              className="group flex min-h-[320px] flex-col justify-between rounded-[30px] border border-[#D8CCBE] bg-[#F7F2EB]/88 p-7 shadow-[0_18px_45px_rgba(92,72,46,0.04)] transition duration-300 hover:-translate-y-[2px] hover:border-[#C5B29C] hover:bg-[#FBF7F1]"
            >
              <div>
                <h3 className="font-serif text-[2rem] leading-[1.15] text-[#2F2A26]">
                       {topic.title}
                          </h3>
                          <p className="mt-3 text-base leading-8 text-[#6A6258]">
                                {topic.short}
                                  </p>
                                  <div className="shrink-0 text-sm font-medium text-[#5F584F]"></div>
  Подробнее →
              </div>

              <div className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[#2E4443]">
                Подробнее
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
      </div>
    </section>
  );
}