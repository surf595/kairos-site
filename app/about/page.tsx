import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "О Викторе — психологе и психотерапевте в Таллине. Индивидуальная психотерапия для взрослых: очно и онлайн.",
  alternates: {
    canonical: "/about",
  },
};

const concerns = [
  "Тревога и внутреннее напряжение",
  "Сложные отношения и повторяющиеся сценарии",
  "Переживание одиночества",
  "Жизненные кризисы и переходные периоды",
  "Чувство пустоты или потерянности",
  "Трудности с самооценкой",
  "Вопросы смысла и жизненного выбора",
  "Внутренние конфликты и эмоциональная перегруженность",
];

const education = [
  {
    title: "Высшее психологическое образование",
    text: "Московский государственный психолого-педагогический университет (МГППУ), специальность «Психология».",
  },
  {
    title: "Бакалавриат и магистратура",
    text: "Полное академическое образование в области психологии.",
  },
  {
    title: "Дополнительная профессиональная подготовка",
    text: "Экзистенциальная психотерапия, групповая психотерапия, Daseinsanalyse.",
  },
  {
    title: "Дополнительное обучение",
    text: "Институт гуманистической и экзистенциальной психологии (HEPI), Литва.",
  },
];

const practiceFacts = [
  "Индивидуальная работа со взрослыми",
  "Очно в Таллине и онлайн",
  "Сессия — 50 минут",
  "Регулярные встречи в согласованное время",
];

export default function AboutPage() {
  return (
    <main className="bg-[var(--bg)] text-[var(--text)]">
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-14 md:px-8 md:pb-24 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_480px] lg:items-start lg:gap-16">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-soft)]">
              Обо мне
            </p>

            <h1 className="max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] md:text-6xl">
              Психотерапия как пространство для понимания себя
            </h1>

            <div className="mt-8 max-w-2xl space-y-6 text-lg leading-8 text-[var(--text-soft)] md:text-[1.34rem] md:leading-9">
              <p>
                Я веду частную психотерапевтическую практику в Таллине.
              </p>
              <p>
                В центре моей работы — внимательное и бережное исследование
                внутреннего опыта человека: его переживаний, отношений и
                жизненных ситуаций.
              </p>
              <p>
                Часто то, что вызывает тревогу, внутреннее напряжение или
                трудности в жизни, связано не только с текущими обстоятельствами,
                но и с более глубокими внутренними процессами — переживаниями,
                конфликтами и повторяющимися жизненными сценариями.
              </p>
              <p>
                Психотерапия создаёт пространство, где становится возможным
                остановиться, прислушаться к себе и постепенно лучше понять
                происходящее внутри.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {practiceFacts.map((fact) => (
                <div
                  key={fact}
                  className="rounded-2xl border border-[var(--line)] bg-white/40 px-5 py-4 text-sm leading-6 text-[var(--text-soft)] backdrop-blur-sm"
                >
                  {fact}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="absolute -left-6 top-8 hidden h-[72%] w-24 rounded-[2rem] bg-[var(--bg-soft)] md:block" />
            <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
              <Image
                src="/images/viktor-about.jpg"
                alt="Виктор — психолог и психотерапевт"
                width={960}
                height={1200}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-soft)]">
              Основные темы
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
              С чем ко мне приходят
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {concerns.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[var(--line)] bg-white/40 px-5 py-5 text-base leading-7 text-[var(--text-soft)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,760px)] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-soft)]">
              Подход
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
              Профессиональная позиция
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[var(--text-soft)]">
            <p>
              В своей работе я опираюсь на экзистенциальное и психодинамическое
              понимание психики.
            </p>
            <p>
              Этот подход рассматривает психологические трудности не только как
              симптомы, которые необходимо устранить, но и как выражение
              внутреннего опыта человека — его переживаний, отношений и
              жизненных конфликтов.
            </p>
            <p>
              Терапия предполагает внимательное исследование этого опыта. Через
              разговор и совместное размышление постепенно становится возможным
              лучше понять собственные чувства, способы реагирования и жизненные
              сценарии, которые могут повторяться в отношениях и в разных
              жизненных ситуациях.
            </p>
            <p>
              Важной частью процесса является создание пространства, в котором
              можно говорить о сложных и уязвимых переживаниях без страха
              оценки.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-soft)]">
              Подготовка
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
              Образование и профессиональная подготовка
            </h2>
          </div>

          <div>
            <div className="grid gap-4">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[var(--line)] bg-white/40 px-6 py-5"
                >
                  <h3 className="text-lg font-medium leading-7 text-[var(--text)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-[var(--text-soft)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm leading-6 text-[var(--text-soft)]">
              Документы об образовании подтверждены Министерством образования
              Эстонии.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,760px)] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-soft)]">
              Развитие
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
              Профессиональное развитие
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[var(--text-soft)]">
            <p>
              Психотерапия предполагает постоянное профессиональное развитие.
            </p>
            <p>
              Я регулярно участвую в профессиональных сообществах, прохожу
              дополнительное обучение, работаю под супервизией и продолжаю
              собственную терапию.
            </p>
            <p>
              Эти практики являются важной частью профессиональной
              ответственности психотерапевта.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="rounded-[2rem] border border-[var(--line)] bg-white/40 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,760px)] lg:gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-soft)]">
                Формат
              </p>
              <h2 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
                Как проходит работа
              </h2>
            </div>

            <div className="space-y-5 text-lg leading-8 text-[var(--text-soft)]">
              <p>Работа проходит в формате регулярных индивидуальных встреч.</p>
              <p>
                Сессия длится 50 минут и проходит в заранее согласованное время.
              </p>
              <p>
                Встречи могут проходить очно в кабинете в Таллине или онлайн
                через видеосвязь.
              </p>
              <p>
                Регулярность и устойчивость терапевтической рамки создают
                пространство, в котором возможно внимательное исследование
                внутреннего опыта и постепенные изменения.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--text-soft)]">
              Пространство
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em] md:text-4xl">
              Кабинет
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[var(--text-soft)]">
              <p>Работа проходит в приватном кабинете в Таллине.</p>
              <p>
                Это спокойное и защищённое пространство, где можно остановиться,
                прислушаться к себе и постепенно выстраивать более ясное
                понимание своего внутреннего мира.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <Image
              src="/images/office.jpg"
              alt="Кабинет Kairos Therapy в Таллине"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 md:px-8 md:pb-28">
        <div className="overflow-hidden rounded-[2rem] bg-[#2c312f] px-8 py-10 text-white md:px-12 md:py-14">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.28em] text-white/60">
              Первый шаг
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em] md:text-5xl">
              Запись на консультацию
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/80">
              Если вы чувствуете, что пришло время разобраться в том, что
              происходит в вашей жизни, вы можете связаться со мной для записи
              на первую встречу.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-[#2c312f] transition hover:scale-[1.02]"
              >
                Связаться
              </Link>

              <Link
                href="/faq"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5"
              >
                Вопросы и ответы
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}