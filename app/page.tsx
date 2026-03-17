import Link from "next/link";
import Image from "next/image";
import TopicsPreview from "./components/TopicsPreview";

const features = [
  { title: "Индивидуальная практика", value: "Для взрослых" },
  { title: "Формат встречи", value: "Очно и онлайн" },
  { title: "Длительность", value: "50 минут" },
  { title: "Язык работы", value: "Русский" },
];

export default function HomePage() {
  return (
    <main className="home-premium bg-[#F3EEE6] text-[#26231F]">
      <section className="home-hero relative overflow-hidden border-b border-black/10">
        <div className="hero-light absolute inset-0" />
        <div className="hero-noise absolute inset-0" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 md:px-10 md:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14 lg:px-12 lg:py-24"></div>.
          <div className="fade-in-up text-left">
            <p className="mb-5 text-[11px] uppercase tracking-[0.28em] text-[#7A7268] md:text-xs md:tracking-[0.34em]">
              Kairos Therapy OÜ • частная практика
            </p>

            <h1 className="max-w-[11ch] text-[2.7rem] font-semibold leading-[0.92] tracking-[-0.05em] text-[#171614] sm:text-6xl lg:max-w-4xl lg:text-7xl">
              Психотерапия как пространство для понимания себя
            </h1>

            <div className="mt-6 h-px w-24 bg-[#B7AA96]" />

            <p className="mt-6 max-w-2xl text-[1rem] leading-7 text-[#575148] sm:text-xl sm:leading-8">
              Частная практика в Таллине для взрослых. Очная и онлайн работа, в
              которой можно не торопиться, постепенно распутывая внутренние
              конфликты, повторяющиеся сценарии, напряжение в отношениях и
              жизненные кризисы.
            </p>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#6C645A] md:text-base md:leading-8">
              Здесь важны не только симптомы и внешние события, но и то, как
              устроен ваш внутренний мир: переживания, бессознательные
              конфликты, способы защищаться, страх близости, вина, стыд и
              одиночество.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacts"
                className="hp-btn hp-btn-primary inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-medium"
              >
                Записаться на консультацию
              </Link>

              <Link
                href="/format"
                className="hp-btn hp-btn-secondary inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-medium"
              >
                О формате работы
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Индивидуальная практика",
                "50 минут",
                "Очно в Таллине",
                "Онлайн",
                "Русский язык",
              ].map((item) => (
                <span
                  key={item}
                  className="hp-chip rounded-full border px-4 py-2 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="fade-in-up [animation-delay:160ms]">
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="absolute -left-10 top-10 hidden h-40 w-40 rounded-full bg-[#E8DED0] blur-3xl md:block" />
              <div className="absolute -right-6 bottom-8 hidden h-52 w-52 rounded-full bg-[#D8C7AF]/70 blur-3xl md:block" />

              <div className="glass-panel relative overflow-hidden rounded-[38px] border border-[#D9CEC0] p-4 sm:p-6 md:p-8">
                <div className="rounded-[30px] border border-[#DED4C8] bg-[linear-gradient(180deg,#F6F1EA_0%,#EFE7DC_100%)] p-4 sm:p-6 md:p-8">
                  <div className="relative flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[24px] border border-[#E2D8CC] bg-[linear-gradient(160deg,rgba(255,255,255,0.62),rgba(238,229,217,0.72))] p-5 sm:min-h-[500px] sm:p-6 md:min-h-[520px] md:p-7">
                    <div className="hero-ambient-light absolute inset-0" />


                    <div className="hero-orbit-system absolute inset-x-0 top-8 z-0 flex justify-center sm:top-12 md:top-[72px]">

                    <div className="hero-orbit-system absolute inset-x-0 top-[72px] z-0 flex justify-center">

                      <div className="orbit orbit-outer orbit-parallax-slow" />
                      <div className="orbit orbit-middle orbit-parallax-fast" />
                      <div className="orbit orbit-inner orbit-parallax-mid" />
                      <div className="orbit-path orbit-path-one" />
                      <div className="orbit-path orbit-path-two" />
                      <div className="orbit-core" />
                      <div className="orbit-glow" />
                      <div className="orbit-dust orbit-dust-one" />
                      <div className="orbit-dust orbit-dust-two" />
                    </div>


                    <div className="relative z-10 flex items-start justify-between">
                      <span className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
                        кабинет
                      </span>
                      <span className="text-sm text-[#8A7E70]">Таллин</span>
                    </div>

                    <div className="relative z-10 flex flex-1 items-center justify-center px-2 pt-8 pb-4 sm:pt-10 md:pt-14">
                      <svg
                        viewBox="0 0 300 300"
                        className="w-[220px] sm:w-[250px] md:w-[260px]"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <circle
                          cx="150"
                          cy="150"
                          r="110"
                          stroke="#CFC5B7"
                          strokeWidth="1"
                          fill="none"
                        />
                        <circle
                          cx="150"
                          cy="150"
                          r="80"
                          stroke="#DAD1C5"
                          strokeWidth="1"
                          fill="none"
                        />
                        <circle
                          cx="150"
                          cy="150"
                          r="50"
                          stroke="#E6DED3"
                          strokeWidth="1"
                          fill="none"
                        />

                        <path
                          d="M40 150 Q150 40 260 150"
                          stroke="#CBBEAD"
                          strokeWidth="1"
                          fill="none"
                        />

                        <path
                          d="M60 200 Q150 90 240 200"
                          stroke="#D6CCBF"
                          strokeWidth="1"
                          fill="none"
                        />
                    <div className="relative flex h-full items-center justify-center">
                      <div className="flex h-full items-center justify-center">
                        <svg
                          viewBox="0 0 300 300"
                          className="w-[260px]"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            cx="150"
                            cy="150"
                            r="110"
                            stroke="#CFC5B7"
                            strokeWidth="1"
                            fill="none"
                          />
                          <circle
                            cx="150"
                            cy="150"
                            r="80"
                            stroke="#DAD1C5"
                            strokeWidth="1"
                            fill="none"
                          />
                          <circle
                            cx="150"
                            cy="150"
                            r="50"
                            stroke="#E6DED3"
                            strokeWidth="1"
                            fill="none"
                          />

                          <path
                            d="M40 150 Q150 40 260 150"
                            stroke="#CBBEAD"
                            strokeWidth="1"
                            fill="none"
                          />

                          <path
                            d="M60 200 Q150 90 240 200"
                            stroke="#D6CCBF"
                            strokeWidth="1"
                            fill="none"
                          />

                          <circle cx="150" cy="150" r="6" fill="#9C7C5D" />
                        </svg>
                      </div>
                    </div>

                        <circle cx="150" cy="150" r="6" fill="#9C7C5D" />
                      </svg>
                    </div>

                    <div className="relative z-10 mx-auto mt-auto max-w-[320px] text-center">
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

              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
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

      <section className="border-y border-black/10 bg-[#F6F1EA]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
                Пространство
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Кабинет в Таллине
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5A534A]">
                Очная работа проходит в спокойном пространстве, где можно
                говорить без спешки и внешнего давления. В терапии важна не
                только беседа, но и сама рамка встречи — место, время и
                устойчивость пространства.
              </p>

              <p className="mt-4 max-w-xl text-lg leading-8 text-[#5A534A]">
                Иногда именно возможность просто быть услышанным в таком месте
                уже становится началом внутреннего движения.
              </p>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-[#D8CCBE] bg-[#F8F4EE] shadow-[0_24px_60px_rgba(92,72,46,0.08)]">
              <div className="relative aspect-[4/3] md:aspect-[4/5]">
                <Image
                  src="/images/cabin/cabin.jpeg"
                  alt="Кабинет психотерапии Kairos Therapy в Таллине"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#EFE7DC]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
                Пространство
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Кабинет в Таллине
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5A534A]">
                Очная работа проходит в спокойном пространстве, где можно
                говорить без спешки и внешнего давления. В терапии важна не
                только беседа, но и сама рамка встречи — место, время и
                устойчивость пространства.
              </p>

              <p className="mt-4 max-w-xl text-lg leading-8 text-[#5A534A]">
                Иногда именно возможность просто быть услышанным в таком месте
                уже становится началом внутреннего движения.
              </p>
            </div>

            <div className="overflow-hidden rounded-[34px] border border-[#D8CCBE] bg-[#F8F4EE] shadow-[0_24px_60px_rgba(92,72,46,0.08)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/cabin/cabin.jpeg"
                  alt="Кабинет психотерапии Kairos Therapy в Таллине"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TopicsPreview />

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
                  объяснить, что именно происходит. Это нормально. Первая
                  встреча нужна не для того, чтобы сразу всё сформулировать
                  идеально, а чтобы начать совместно разбираться в происходящем.
                  Нередко человек приходит с ощущением, что ему трудно объяснить,
                  что именно происходит. Это нормально. Первая встреча нужна не
                  для того, чтобы сразу всё сформулировать идеально, а чтобы
                  начать совместно разбираться в происходящем.
                </p>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/faq"
                    className="hp-btn hp-btn-secondary inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-medium"
                  >
                    Читать FAQ
                  </Link>
                  <Link
                    href="/contacts"
                    className="hp-btn hp-btn-primary inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-medium"
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