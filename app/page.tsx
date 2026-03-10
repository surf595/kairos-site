import Link from "next/link";

const themes = [
  "Тревога и внутреннее напряжение",
  "Сложности в отношениях",
  "Повторяющиеся жизненные сценарии",
  "Кризисы, утраты, чувство тупика",
  "Проблемы с границами и самооценкой",
  "Ощущение, что с вами «что-то не так»",
];

const features = [
  { title: "Индивидуальная практика", value: "Для взрослых" },
  { title: "Формат встречи", value: "Очно и онлайн" },
  { title: "Длительность", value: "50 минут" },
  { title: "Язык работы", value: "Русский" },
];

export default function HomePage() {
  return (
    <main className="bg-[#F3EEE6] text-[#26231F]">
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="hero-light absolute inset-0" />
        <div className="hero-noise absolute inset-0" />

        <div className="relative mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-14 px-6 py-16 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:px-12 lg:py-24">
          <div className="max-w-3xl fade-in-up">
            <p className="mb-6 text-xs uppercase tracking-[0.34em] text-[#7A7268]">
              Kairos • частная практика
            </p>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-[#171614] sm:text-6xl lg:text-7xl">
              Психотерапия как пространство для понимания себя
            </h1>

            <div className="mt-8 h-px w-24 bg-[#B7AA96]" />

            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#575148] sm:text-xl">
              Частная практика в Таллине для взрослых. Очная и онлайн работа, в
              которой можно не торопиться, постепенно распутывая внутренние
              конфликты, повторяющиеся сценарии, напряжение в отношениях и
              жизненные кризисы.
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#6C645A]">
              Здесь важны не только симптомы и внешние события, но и то, как
              устроен ваш внутренний мир: переживания, бессознательные
              конфликты, способы защищаться, страх близости, вина, стыд и
              одиночество.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contacts"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#171614] px-8 text-base font-medium text-[#F8F4EE] transition duration-300 hover:-translate-y-0.5 hover:bg-[#26231F] hover:shadow-[0_16px_40px_rgba(23,22,20,0.18)]"
              >
                Записаться на консультацию
              </Link>

              <Link
                href="/format"
                className="inline-flex h-14 items-center justify-center rounded-full border border-[#CBBEAD] bg-[#F7F2EB]/80 px-8 text-base font-medium text-[#26231F] transition duration-300 hover:-translate-y-0.5 hover:border-[#B6A68F] hover:bg-[#FBF8F3] hover:shadow-[0_12px_30px_rgba(92,72,46,0.08)]"
              >
                О формате работы
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Индивидуальная практика",
                "50 минут",
                "Очно в Таллине",
                "Онлайн",
                "Русский язык",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#D7CCBE] bg-[#F7F2EC]/80 px-4 py-2 text-sm text-[#5F584F] shadow-[0_8px_20px_rgba(92,72,46,0.04)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative fade-in-up [animation-delay:160ms]">
            <div className="relative mx-auto max-w-[560px]">
              <div className="absolute -left-10 top-10 hidden h-40 w-40 rounded-full bg-[#E8DED0] blur-3xl md:block" />
              <div className="absolute -right-6 bottom-8 hidden h-52 w-52 rounded-full bg-[#D8C7AF]/70 blur-3xl md:block" />

              <div className="glass-panel relative overflow-hidden rounded-[38px] border border-[#D9CEC0] p-6 sm:p-8">
                <div className="rounded-[30px] border border-[#DED4C8] bg-[linear-gradient(180deg,#F6F1EA_0%,#EFE7DC_100%)] p-6 sm:p-8">
                  <div className="relative flex min-h-[520px] flex-col justify-between overflow-hidden rounded-[24px] border border-[#E2D8CC] bg-[linear-gradient(160deg,rgba(255,255,255,0.62),rgba(238,229,217,0.72))] p-6 sm:p-7">
                    <div className="hero-ambient-light absolute inset-0" />

                    <div className="hero-orbit-system absolute inset-x-0 top-[72px] z-0 flex justify-center">
                      <div className="orbit orbit-outer" />
                      <div className="orbit orbit-middle" />
                      <div className="orbit-core" />
                      <div className="orbit-glow" />
                    </div>

                    <div className="relative z-10 flex items-start justify-between">
                      <span className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
                        кабинет
                      </span>
                      <span className="text-sm text-[#8A7E70]">Таллин</span>
                    </div>

                    <div className="relative z-10 mt-auto max-w-[300px]">
                      <p className="text-sm leading-8 text-[#6B6259]">
                        Спокойное пространство, в котором можно выдерживать
                        сложные чувства, замечать скрытые связи и постепенно
                        находить собственный язык для понимания себя.
                      </p>
                      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-[#C8B79F] to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="soft-card rounded-[24px] border border-[#D9CEC0] bg-[#F7F2EB]/80 p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-[#8A7E70]">
                    подход
                  </div>
                  <div className="mt-3 text-base leading-7 text-[#3B3834]">
                    Психодинамическая и аналитически ориентированная работа
                  </div>
                </div>

                <div className="soft-card rounded-[24px] border border-[#D9CEC0] bg-[#F7F2EB]/80 p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-[#8A7E70]">
                    пространство
                  </div>
                  <div className="mt-3 text-base leading-7 text-[#3B3834]">
                    Тёплая, спокойная атмосфера без спешки и давления
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
              О практике
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Не быстрые советы, а пространство для внутренней работы
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-[#5A534A]">
            <p>
              Иногда человек приходит не с ясным запросом, а с ощущением
              внутренней спутанности: тревога, истощение, повторяющиеся
              конфликты, напряжение в отношениях, чувство одиночества,
              невозможность опереться на себя.
            </p>
            <p>
              В терапии мы не только обсуждаем происходящее, но и пытаемся
              понять, как устроен ваш способ переживать, защищаться, вступать в
              отношения, выдерживать близость, злость, вину, стыд и зависимость.
            </p>
            <p>
              Такая работа требует времени, внимания и безопасной рамки. Именно
              поэтому для меня важны и содержание сессии, и само пространство, в
              котором эта встреча происходит.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#EFE7DC]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
                С чем я работаю
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Темы, с которыми чаще всего приходят в терапию
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm text-[#6B6259] underline decoration-[#B7AA96] underline-offset-4"
            >
              Подробнее о направлениях работы
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {themes.map((theme) => (
              <div
                key={theme}
                className="soft-card rounded-[28px] border border-[#D8CCBE] bg-[#F7F2EB]/85 p-6"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[#9C7C5D]" />
                  <p className="text-base leading-7 text-[#3C3935]">{theme}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
              Формат работы
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Рамка, которая помогает выдерживать и понимать процесс
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5A534A]">
              Сеттинг — это не формальность, а часть терапевтической работы.
              Постоянство времени, места и рамки помогает постепенно создавать
              пространство, в котором может возникать доверие и осмысление.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((item) => (
              <div
                key={item.title}
                className="soft-card rounded-[28px] border border-[#D9CEC0] bg-[#F8F4EE] p-6"
              >
                <div className="text-sm uppercase tracking-[0.18em] text-[#8A7E70]">
                  {item.title}
                </div>
                <div className="mt-3 text-xl font-medium text-[#24211E]">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#EDE4D7]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="glass-panel overflow-hidden rounded-[36px] border border-[#D4C7B7] p-8 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
                  Первая встреча
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                  Можно прийти и без “правильного запроса”
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5A534A]">
                  Нередко человек приходит с ощущением, что ему трудно
                  объяснить, что именно происходит. Это нормально. Первая встреча
                  нужна не для того, чтобы сразу всё сформулировать идеально, а
                  чтобы начать совместно разбираться в происходящем.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/faq"
                    className="inline-flex h-14 items-center justify-center rounded-full border border-[#CBBEAD] bg-[#FAF6F0] px-8 text-base font-medium text-[#26231F] transition hover:-translate-y-0.5 hover:border-[#B6A68F]"
                  >
                    Читать FAQ
                  </Link>
                  <Link
                    href="/contacts"
                    className="inline-flex h-14 items-center justify-center rounded-full bg-[#171614] px-8 text-base font-medium text-[#F8F4EE] transition hover:-translate-y-0.5 hover:bg-[#26231F]"
                  >
                    Связаться со мной
                  </Link>
                </div>
              </div>

              <div className="rounded-[30px] border border-[#DACDBE] bg-[#F6F1EA]/90 p-6 shadow-[0_24px_60px_rgba(92,72,46,0.08)]">
                <div className="rounded-[24px] border border-[#E1D6C9] bg-[#FBF8F3] p-6">
                  <p className="text-sm leading-8 text-[#5D554B]">
                    «Иногда внешне всё как будто в порядке, но внутри остаётся
                    чувство, что жить становится всё труднее. В терапии важно не
                    только облегчение симптома, но и понимание того, как
                    складывается ваша внутренняя жизнь».
                  </p>
                  <div className="mt-6 h-px w-full bg-[#E2D8CC]" />
                  <p className="mt-4 text-sm uppercase tracking-[0.2em] text-[#8A7E70]">
                    Kairos Therapy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}