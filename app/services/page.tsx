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
    <main className="page-shell">
      <section className="section-wrap pb-10">
        <p className="eyebrow">Направления работы</p>
        <h1 className="title-hero mt-4">С чем ко мне обращаются в терапию</h1>
        <p className="lead mt-6">
          В терапию часто приходят не только с конкретной проблемой, но и с
          ощущением, что в жизни что-то повторяется, застревает или теряет
          смысл.
        </p>
      </section>

      <section className="section-wrap pt-6">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {workItems.map((item) => (
            <article key={item.title} className="surface-card p-7 md:p-8">
              <h2 className="font-serif text-[1.85rem] font-semibold leading-[1.06] tracking-[-0.02em] text-[var(--ink-main)]">
                {item.title}
              </h2>
              <p className="mt-4 text-[0.98rem] leading-7 text-[var(--ink-soft)]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
