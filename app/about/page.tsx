import Image from "next/image";
import Link from "next/link";
import RelatedLinks from "../components/related-links";
import { practiceInfo, relatedSections } from "../lib/content";
import { buildPageMetadata } from "../lib/seo";

export const metadata = buildPageMetadata({
  title: "Обо мне",
  description: "О практике, профессиональной позиции, образовании и формате работы.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-14 px-6 py-12 md:space-y-16 md:px-10 md:py-16 lg:px-12">
      <header className="grid items-start gap-10 md:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-6">
          <h1 className="text-4xl font-medium tracking-tight md:text-5xl">Обо мне</h1>

          <div className="space-y-5 text-lg leading-relaxed text-[#49504a]">
            <p>
              Я веду частную психотерапевтическую практику в Таллине. В центре
              моей работы — внимательное и бережное исследование внутреннего
              опыта человека: его переживаний, отношений и жизненных ситуаций.
            </p>
            <p>
              Часто то, что вызывает тревогу и внутреннее напряжение, связано не
              только с текущими обстоятельствами, но и с более глубокими
              внутренними процессами — конфликтами и повторяющимися жизненными
              сценариями.
            </p>
            <p>
              Терапия создаёт пространство, где становится возможным остановиться,
              прислушаться к себе и постепенно лучше понять то, что происходит
              внутри.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[420px] justify-self-end overflow-hidden rounded-2xl border border-[#2f3331]/15 shadow-sm">
          <Image
            src="/images/viktor.jpeg"
            alt="Портрет психолога"
            width={500}
            height={620}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </header>

      <section className="space-y-5">
        <h2 className="text-2xl font-medium md:text-3xl">Профессиональная позиция</h2>
        <div className="space-y-4 text-lg leading-relaxed text-[#49504a]">
          <p>
            В своей работе я опираюсь на экзистенциальное и психодинамическое
            понимание психики.
          </p>
          <p>
            Этот подход рассматривает психологические трудности не только как
            симптомы, которые необходимо устранить, но и как выражение
            внутреннего опыта — переживаний, отношений, жизненных выборов и
            конфликтов.
          </p>
          <p>
            Через разговор и совместное исследование постепенно становится
            возможным лучше понять собственные чувства, способы реагирования и
            те сценарии, которые повторяются в отношениях и жизненных ситуациях.
          </p>
        </div>
      </section>

      <section className="grid gap-6 rounded-3xl border border-[#2f3331]/15 bg-[#f8f4ed]/75 p-7 md:grid-cols-2 md:p-8">
        <div>
          <h2 className="text-2xl font-medium md:text-3xl">Образование и подготовка</h2>
          <div className="mt-4 space-y-3 text-[17px] leading-relaxed text-[#49504a]">
            <p>
              Психологическое образование: МГППУ, специальность «Психология».
            </p>
            <p>
              Дополнительная подготовка в области экзистенциальной психотерапии,
              групповой терапии и Daseinsanalyse.
            </p>
            <p className="text-sm text-[#737972]">
              Документы об образовании подтверждены Министерством образования
              Эстонии.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-medium md:text-3xl">Рамка работы</h2>
          <div className="mt-4 space-y-3 text-[17px] leading-relaxed text-[#49504a]">
            <p>Индивидуальные встречи для взрослых.</p>
            <p>Длительность сессии — {practiceInfo.sessionDuration}.</p>
            <p>Формат: очно ({practiceInfo.officeAddress}) и онлайн.</p>
            <p>
              Регулярность и устойчивость сеттинга помогают выстраивать
              безопасное пространство для внутренних изменений.
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-[#2f3331]/15 bg-[#2f3331] p-8 text-[#f6f2ea]">
        <h2 className="text-2xl font-medium md:text-3xl">Запись на первую встречу</h2>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-[#ece7de]">
          Если вы чувствуете, что хотите разобраться в происходящем, можно
          сделать первый шаг в спокойном темпе.
        </p>
        <Link
          href="/contacts"
          className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-[#f3eee6] px-6 text-sm font-medium text-[#26231f] transition hover:bg-[#fff]"
        >
          Перейти к контактам
        </Link>
      </section>

      <RelatedLinks
        title="Что посмотреть дальше"
        items={relatedSections.filter((item) => item.href !== "/about")}
      />
    </main>
  );
}
