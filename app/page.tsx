export default function Home() {
  const focusAreas = [
    "Тревога и внутреннее напряжение",
    "Трудности в отношениях",
    "Повторяющиеся жизненные сценарии",
    "Кризисы и жизненные переходы",
    "Чувство пустоты и утраты смысла",
    "Стыд, вина, самооценка",
  ];

  const faqItems = [
    {
      question: "С чем можно приходить?",
      answer:
        "С любыми внутренними затруднениями: тревогой, конфликтами в отношениях, усталостью, переживанием утраты, ощущением тупика или повторяющихся ситуаций.",
    },
    {
      question: "Нужно ли уметь формулировать запрос?",
      answer:
        "Нет. Запрос может проясняться постепенно в процессе совместной работы — в вашем темпе и с опорой на то, что сейчас действительно важно.",
    },
    {
      question: "Можно ли работать онлайн?",
      answer:
        "Да. Онлайн-формат подходит для регулярной психотерапии и может быть устойчивой формой долгосрочной работы.",
    },
    {
      question: "Сколько длится встреча?",
      answer: "Стандартная длительность индивидуальной сессии — 50 минут.",
    },
    {
      question: "Как записаться на первую консультацию?",
      answer:
        "Напишите в Telegram или на email. Я отвечу и предложу ближайшие возможные окна для первой встречи.",
    },
  ];

  return (
    <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-12 md:gap-24 md:px-10 md:py-20">
      <header className="relative overflow-hidden rounded-[2.25rem] border border-[#6d6b64]/20 bg-gradient-to-br from-[#f8f4ed] via-[#f3efe7] to-[#ece8e1] p-8 md:p-14">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#7f8572]/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-[#6f3f56]/20 blur-3xl" />
        <div className="pointer-events-none absolute left-1/3 top-1/3 h-64 w-64 rounded-full border border-[#2f3331]/10" />
        <div className="relative grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="space-y-6">
            <p className="text-sm tracking-[0.16em] text-[#5c615b] uppercase">Kairos • Частная практика</p>
            <h1 className="max-w-2xl text-4xl leading-tight font-medium text-[#252a27] md:text-6xl">
              Психотерапия как пространство для понимания себя
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[#4b514c] md:text-xl">
              Частная практика в Таллине, очно и онлайн.
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                href="/contacts"
                className="rounded-full border border-[#2f3331]/80 bg-[#2f3331] px-6 py-3 text-center text-sm font-medium text-[#f6f2ea] transition hover:bg-[#252927]"
              >
                Записаться
              </a>
              <a
                href="/format"
                className="rounded-full border border-[#2f3331]/25 px-6 py-3 text-center text-sm font-medium text-[#2f3331] transition hover:border-[#2f3331]/45"
              >
                О формате работы
              </a>
            </div>
          </div>
          <div className="relative mx-auto h-64 w-full max-w-md md:h-80">
            <div className="absolute inset-0 rounded-[2rem] border border-[#2f3331]/10 bg-gradient-to-tr from-[#7f8572]/25 via-transparent to-[#6f3f56]/20" />
            <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-[#2f3331]/15 bg-[#f8f4ed]/70" />
            <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-[#6f3f56]/20 blur-md" />
            <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7f8572]/25 blur-lg" />
          </div>
        </div>
      </header>

      <section className="max-w-3xl space-y-4">
        <h2 className="text-3xl leading-tight font-medium md:text-4xl">Коротко о практике</h2>
        <p className="text-lg leading-relaxed text-[#49504a]">
          В центре работы — бережное и внимательное исследование внутреннего опыта: повторяющихся сценариев,
          отношений с собой и другими, скрытых конфликтов и чувств, которым часто не хватает места в
          повседневности.
        </p>
      </section>

      <section className="space-y-8" aria-labelledby="focus-areas-title">
        <h2 id="focus-areas-title" className="text-3xl leading-tight font-medium md:text-4xl">
          С чем я работаю
        </h2>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {focusAreas.map((item) => (
            <article
              key={item}
              className="rounded-3xl border border-[#2f3331]/15 bg-[#f8f4ed]/70 p-6 text-lg leading-snug text-[#303632]"
            >
              {item}
            </article>
          ))}
        </div>
      </section>

      <section
        id="format"
        className="space-y-8 rounded-[2rem] border border-[#2f3331]/15 bg-[#f8f4ed]/75 p-8 md:p-10"
      >
        <h2 className="text-3xl leading-tight font-medium md:text-4xl">Формат работы</h2>
        <ul className="grid gap-4 text-lg text-[#424942] md:grid-cols-2">
          <li className="rounded-2xl border border-[#2f3331]/10 bg-[#f6f2ea] p-5">Индивидуальная психотерапия</li>
          <li className="rounded-2xl border border-[#2f3331]/10 bg-[#f6f2ea] p-5">Очно в Таллине</li>
          <li className="rounded-2xl border border-[#2f3331]/10 bg-[#f6f2ea] p-5">Онлайн</li>
          <li className="rounded-2xl border border-[#2f3331]/10 bg-[#f6f2ea] p-5">Регулярные встречи и устойчивая рамка</li>
        </ul>
      </section>

      <section className="max-w-3xl space-y-4">
        <h2 className="text-3xl leading-tight font-medium md:text-4xl">Кабинет / пространство</h2>
        <p className="text-lg leading-relaxed text-[#49504a]">
          Приватный кабинет в Таллине — спокойное, защищённое пространство, где можно останавливаться,
          прислушиваться к себе и постепенно выстраивать более ясное понимание своего внутреннего мира.
        </p>
      </section>

      <section className="space-y-5 rounded-[2rem] border border-[#2f3331]/15 bg-gradient-to-r from-[#f8f4ed] to-[#f1ece4] p-8 md:p-10">
        <h2 className="text-3xl leading-tight font-medium md:text-4xl">Стоимость</h2>
        <p className="text-lg text-[#424942]">Индивидуальная сессия — по договоренности.</p>
        <p className="text-lg text-[#424942]">Длительность — 50 минут.</p>
      </section>

      <section className="space-y-8" aria-labelledby="faq-title">
        <h2 id="faq-title" className="text-3xl leading-tight font-medium md:text-4xl">
          FAQ
        </h2>
        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-[#2f3331]/15 bg-[#f8f4ed]/75 p-5 open:bg-[#f8f4ed]"
            >
              <summary className="cursor-pointer list-none pr-8 text-lg font-medium text-[#2f3331]">{item.question}</summary>
              <p className="pt-3 text-base leading-relaxed text-[#49504a]">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-[#2f3331]/15 bg-[#2f3331] p-8 text-[#f6f2ea] md:p-12">
        <div className="max-w-3xl space-y-5">
          <h2 className="text-3xl leading-tight font-medium md:text-4xl">
            Если вы чувствуете, что время пришло — можно начать с первого шага.
          </h2>
          <p className="text-lg text-[#ece7de]">Для записи на первичную консультацию выберите удобный способ связи.</p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              href="mailto:hello@kairos.ee"
              className="rounded-full border border-[#f6f2ea]/60 px-6 py-3 text-center text-sm font-medium transition hover:bg-[#f6f2ea] hover:text-[#2f3331]"
            >
              Email
            </a>
            <a
              href="tel:+3725093008"
              className="rounded-full border border-[#f6f2ea]/60 px-6 py-3 text-center text-sm font-medium transition hover:bg-[#f6f2ea] hover:text-[#2f3331]"
            >
              Телефон
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
