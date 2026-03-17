import Link from "next/link";
import { notFound } from "next/navigation";
import { topics } from "../../lib/topics";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return topics.map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const topic = topics.find((item) => item.slug === slug);

  if (!topic) {
    return {
      title: "Страница не найдена",
    };
  }

  return {
    title: topic.title,
    description: topic.short,
  };
}

export default async function TopicDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const topic = topics.find((item) => item.slug === slug);

  if (!topic) {
    notFound();
  }

  const otherTopics = topics.filter((item) => item.slug !== topic.slug);

  return (
    <main className="bg-[#F3EEE6] text-[#26231F]">
      <section className="border-b border-black/10 bg-[#F3EEE6]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12 lg:py-24">
          <Link
            href="/s-chem-ya-rabotayu"
            className="inline-flex items-center gap-2 text-sm text-[#6B6259] transition hover:text-[#2E4443]"
          >
            <span aria-hidden="true">←</span>
            Все направления
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
                Направление работы
              </p>
              <h1 className="mt-5 max-w-[10ch] font-serif text-5xl leading-[1.08] text-[#2F2A26] sm:text-6xl">
  {topic.title}
</h1>
            </div>

            <div>
              <p className="max-w-2xl text-xl leading-9 text-[#6A6258] lg:ml-auto">
                {topic.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F1EA]">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-16 md:px-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-20 lg:px-12 lg:py-20">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-6 text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
              Другие темы
            </p>

            <nav className="block rounded-[22px] border border-[#D8CCBE] bg-[#F8F4EE]/88 px-5 py-4 text-[15px] leading-7 text-[#5F584F] transition hover:bg-[#FBF8F3]">
              {otherTopics.map((item) => (
                <Link
                  key={item.slug}
                  href={`/s-chem-ya-rabotayu/${item.slug}`}
                  className="block border-b border-[#DED4C8] py-4 text-[15px] leading-7 text-[#314443] transition hover:pl-1"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </aside>

          <article className="max-w-3xl">
            <div className="rounded-[34px] border border-[#D9CEC0] bg-[#FBF8F3] p-8 md:p-10 shadow-[0_20px_50px_rgba(92,72,46,0.04)]">
              <div className="space-y-8 text-lg leading-9 text-[#6A6258]">
                {topic.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 border-t border-[#E3D9CE] pt-8">
                <h2 className="text-3xl font-medium tracking-[-0.03em] text-[#2F2A26]">
                  Обсудить запрос
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[#5A534A]">
                  Если вы узнаёте себя в этой теме, это можно спокойно обсудить
                  на первой встрече. Не обязательно сразу точно формулировать
                  запрос — иногда он проясняется уже в процессе разговора.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contacts"
                    className="hp-btn hp-btn-primary inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-medium"
                  >
                    Связаться
                  </Link>

                  <Link
                    href="/faq"
                    className="hp-btn hp-btn-secondary inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-medium"
                  >
                    Читать FAQ
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}