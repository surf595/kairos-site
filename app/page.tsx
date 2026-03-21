import Link from "next/link";
import Image from "next/image";

const themes = [
  "Тревога, внутреннее напряжение и истощение",
  "Сложности близости, дистанции и границ в отношениях",
  "Повторяющиеся сценарии, из которых трудно выйти",
  "Кризисы, утраты и ощущение внутреннего тупика",
  "Стыд, вина, самокритика и хрупкая самооценка",
  "Чувство одиночества и потеря контакта с собой",
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-stage relative isolate min-h-[92svh] overflow-hidden">
        <Image
          src="/images/cabin/cabin.jpeg"
          alt="Кабинет Kairos Therapy в Таллине"
          fill
          priority
          sizes="100vw"
          className="hero-media object-cover"
        />

        <div className="hero-vignette absolute inset-0" aria-hidden="true" />

        <div className="section-wrap relative z-10 flex min-h-[92svh] items-end pb-14 pt-28 md:pb-18 lg:pt-32">
          <div className="max-w-4xl">
            <p className="hero-brand reveal-up">Kairos Therapy</p>
            <h1 className="hero-headline reveal-up reveal-delay-1">
              Психотерапия как внимательная работа с внутренней жизнью
            </h1>
            <p className="hero-support reveal-up reveal-delay-2">
              Частная практика в Таллине и онлайн. Спокойное, устойчивое
              пространство, где можно говорить о сложном без спешки и давления.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row reveal-up reveal-delay-3">
              <Link href="/contacts" className="btn-primary">
                Записаться на консультацию
              </Link>
              <Link href="/format" className="btn-secondary">
                Узнать о формате
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap">
        <p className="eyebrow">Подход</p>
        <h2 className="title-section mt-4">Не быстрые советы, а постепенное понимание себя</h2>
        <p className="lead mt-6">
          В терапии мы исследуем не только события, но и то, как вы проживаете
          чувства, выдерживаете близость, защищаетесь от боли и строите
          отношения с собой и другими.
        </p>
      </section>

      <section className="section-wrap border-y border-[var(--border-soft)]">
        <p className="eyebrow">С чем я работаю</p>
        <h2 className="title-section mt-4">Темы, с которыми чаще всего приходят</h2>
        <p className="lead mt-6">
          Ниже — ориентиры, с которыми мы можем начать диалог.
        </p>

        <ul className="mt-10 grid gap-x-8 gap-y-4 md:grid-cols-2">
          {themes.map((theme) => (
            <li key={theme} className="border-b border-[var(--border-soft)] pb-4 text-[1.04rem] leading-8 text-[var(--ink-soft)]">
              {theme}
            </li>
          ))}
        </ul>
      </section>

      <section className="section-wrap">
        <p className="eyebrow">Формат</p>
        <h2 className="title-section mt-4">Рамка работы</h2>
        <p className="lead mt-6">Индивидуальная практика для взрослых: 50 минут, очно в Таллине и онлайн.</p>

        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-[1rem] text-[var(--ink-soft)]">
          <span>Индивидуальная сессия — 60 €</span>
          <span className="hidden h-4 w-px bg-[var(--border-soft)] md:block" />
          <span>Групповая работа — 25 €</span>
          <span className="hidden h-4 w-px bg-[var(--border-soft)] md:block" />
          <span>Обычно 1–2 встречи в неделю</span>
        </div>
      </section>
    </main>
  );
}
