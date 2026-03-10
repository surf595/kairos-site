const workItems = [
  {
    title: "Тревога и внутреннее напряжение",
    description:
      "Когда трудно расслабиться, выдерживать неопределённость и чувствовать внутреннюю опору.",
  },
  {
    title: "Трудности в отношениях",
    description:
      "Конфликты, болезненная близость, страх отвержения и повторяющиеся сложности с партнёрами и близкими.",
  },
  {
    title: "Повторяющиеся жизненные сценарии",
    description:
      "Когда в разных отношениях и обстоятельствах снова происходит что-то очень похожее.",
  },
  {
    title: "Кризисы и сложные переходы",
    description:
      "Расставания, потери, выгорание, смена роли, жизненные переломы и периоды неопределённости.",
  },
  {
    title: "Чувство пустоты и одиночества",
    description:
      "Когда внутри мало смысла, тепла, связи с собой или ощущения живости.",
  },
  {
    title: "Самооценка, стыд и вина",
    description:
      "Жёсткая самокритика, ощущение собственной несостоятельности и трудность опираться на себя.",
  },
] as const;

export default function WorkSection() {
  return (
    <section
      id="work"
      className="border-t border-stone-300 bg-[#f3efe8]"
      aria-labelledby="work-section-title"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.18em] text-stone-500">
            Направления работы
          </p>

          <h2
            id="work-section-title"
            className="text-4xl font-medium tracking-tight text-stone-800 md:text-5xl"
          >
            С чем ко мне обращаются
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-7 text-stone-600 md:text-lg">
            В терапию часто приходят не только с конкретной проблемой, но и с
            ощущением, что в жизни что-то повторяется, застревает или теряет
            смысл.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
          {workItems.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-stone-300/90 bg-[#f6f2eb] p-7 transition duration-300 hover:-translate-y-0.5 hover:border-stone-400 hover:bg-[#f8f5ef] hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >
              <h3 className="text-2xl font-medium leading-tight text-stone-800">
                {item.title}
              </h3>

              <p className="mt-4 text-[15px] leading-7 text-stone-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}