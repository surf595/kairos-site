export default function FormatWorkSection() {
  const items = [
    {
      title: "Индивидуальная работа",
      text: "Индивидуальные встречи один на один с терапевтом.",
    },
    {
      title: "Очно в Таллине",
      text: "Tatari 56, кабинет 308",
    },
    {
      title: "Онлайн",
      text: "Сессии могут проходить по видеосвязи.",
    },
    {
      title: "Регулярность встреч",
      text: "Обычно 1–2 раза в неделю.",
    },
  ];

  return (
    <main className="page-shell">
      <section className="section-wrap pb-10">
        <p className="eyebrow">Формат работы</p>
        <h1 className="title-hero mt-4">Спокойная и понятная организация терапии</h1>
      </section>

      <section className="section-wrap pt-6">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <div key={item.title} className="surface-card p-6">
              <h2 className="font-serif text-[1.45rem] font-semibold leading-tight text-[var(--ink-main)]">
                {item.title}
              </h2>
              <p className="mt-3 text-[0.97rem] leading-7 text-[var(--ink-soft)]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="surface-elevated mt-8 p-6 sm:p-7">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="body-muted text-sm">Продолжительность</p>
              <p className="mt-1 text-lg font-medium text-[var(--ink-main)]">50 минут</p>
            </div>

            <div>
              <p className="body-muted text-sm">Индивидуальная сессия</p>
              <p className="mt-1 text-lg font-medium text-[var(--ink-main)]">60 €</p>
            </div>

            <div>
              <p className="body-muted text-sm">Групповая работа</p>
              <p className="mt-1 text-lg font-medium text-[var(--ink-main)]">25 €</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
