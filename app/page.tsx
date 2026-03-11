import Image from "next/image";
import Link from "next/link";

const themes = [
  "Тревога и внутреннее напряжение",
  "Сложности в отношениях",
  "Повторяющиеся жизненные сценарии",
  "Кризисы, утраты, чувство тупика",
  "Проблемы с границами и самооценкой",
  "Ощущение, что с вами «что-то не так»",
];

const firstStepItems = [
  "Вы пишете в удобной форме: через сайт, email или телефон.",
  "Я отвечаю и предлагаю возможные окна для первой встречи.",
  "Мы выбираем подходящий формат: очно в Таллине или онлайн.",
] as const;

export default function HomePage() {
  return (
    <main className="bg-[#F3EEE6] text-[#26231F]">
      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:px-10 md:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#7A7268]">
              Kairos Therapy OÜ • частная практика
            </p>

            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#171614] sm:text-5xl lg:text-6xl">
              Психотерапия как спокойное пространство для понимания себя
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#575148]">
              Частная практика в Таллине для взрослых. Очная и онлайн работа,
              в которой можно не торопиться и постепенно разбираться в
              переживаниях, внутренних конфликтах, отношениях и жизненных
              кризисах.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contacts"
                className="inline-flex h-13 items-center justify-center rounded-full bg-[#171614] px-7 text-sm font-medium text-[#F7F3EC] transition hover:bg-[#27231F]"
              >
                Записаться на первую встречу
              </Link>

              <Link
                href="/format"
                className="inline-flex h-13 items-center justify-center rounded-full border border-[#CFC2B2] bg-[#FBF8F3]/85 px-7 text-sm font-medium text-[#2A2722] transition hover:border-[#B8A893]"
              >
                Как устроен формат работы
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {["Индивидуальная практика", "50 минут", "Очно и онлайн", "Русский язык"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#D8CCBE] bg-[#F8F4EE] px-4 py-2 text-sm text-[#5E564D]"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="overflow-hidden rounded-[34px] border border-[#D8CCBE] bg-[#F8F4EE] shadow-[0_24px_60px_rgba(92,72,46,0.08)]">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/cabin/cabin.jpeg"
                alt="Кабинет психотерапии Kairos Therapy в Таллине"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 44vw"
                priority
              />
            </div>

            <div className="border-t border-[#D8CCBE] bg-[#F6F1EA] px-6 py-5">
              <p className="text-sm leading-7 text-[#5D554B]">
                Устойчивое пространство, в котором можно говорить без спешки и
                внешнего давления.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
              О практике
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Не быстрые советы, а совместная внутренняя работа
            </h2>
          </div>

          <div className="space-y-5 text-lg leading-8 text-[#5A534A]">
            <p>
              В терапию часто приходят не с готовой формулировкой проблемы, а с
              ощущением внутренней спутанности, тревоги, истощения или повторяющихся
              сложностей в отношениях.
            </p>
            <p>
              Мы исследуем не только события, но и то, как устроен ваш способ
              переживать, защищаться, вступать в отношения, выдерживать близость,
              вину, стыд и одиночество.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#EFE7DC]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
                С чем я работаю
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
                Темы, с которыми чаще всего обращаются
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm text-[#6B6259] underline decoration-[#B7AA96] underline-offset-4"
            >
              Все направления работы
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {themes.map((theme) => (
              <div
                key={theme}
                className="rounded-[28px] border border-[#D8CCBE] bg-[#F7F2EB]/85 p-6"
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

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#8A7E70]">
              Первый шаг
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
              Понятный и бережный путь к первой встрече
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#5A534A]">
              Можно обратиться и без «правильного запроса». На первой встрече мы
              спокойно проясняем, что сейчас важно именно для вас.
            </p>
          </div>

          <div className="rounded-[30px] border border-[#DACDBE] bg-[#F6F1EA]/90 p-6 md:p-8">
            <ol className="space-y-3 text-[16px] leading-7 text-[#4F4941]">
              {firstStepItems.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#CCBCA7] text-xs font-medium text-[#6E5C49]">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contacts"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#171614] px-6 text-sm font-medium text-[#F7F3EC] transition hover:bg-[#27231F]"
              >
                Связаться и выбрать время
              </Link>
              <Link
                href="/faq"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#CFC2B2] bg-[#FBF8F3]/85 px-6 text-sm font-medium text-[#2A2722] transition hover:border-[#B8A893]"
              >
                Читать вопросы и ответы
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
