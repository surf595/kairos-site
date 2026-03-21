import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="page-shell">
      <section className="section-wrap pb-10">
        <p className="eyebrow">Обо мне</p>
        <h1 className="title-hero mt-4">Психотерапевтическая практика как пространство встречи</h1>
        <p className="lead mt-6">
          Я работаю со взрослыми в психоаналитически ориентированном подходе. В
          центре моей практики — внимательный диалог, устойчивые границы и
          уважение к индивидуальному ритму человека.
        </p>
      </section>

      <section className="section-wrap pt-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <article className="surface-card p-7 md:p-9">
            <h2 className="title-section text-[2rem] md:text-[2.35rem]">Подход в работе</h2>
            <div className="mt-6 space-y-4 text-[1.03rem] leading-8 text-[var(--ink-soft)]">
              <p>
                Терапия для меня — это не набор быстрых техник, а процесс, в
                котором постепенно появляется больше ясности, устойчивости и
                внутренней свободы.
              </p>
              <p>
                Мы исследуем повторяющиеся переживания и отношения, которые
                формируют ваш текущий опыт. Темп работы всегда соотносится с
                вашими возможностями и задачами.
              </p>
            </div>
          </article>

          <div className="surface-elevated overflow-hidden p-3 md:p-4">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
              <Image
                src="/images/cabin/cabin.jpeg"
                alt="Кабинет психотерапевтической практики"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap pt-2">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="surface-card p-7 md:p-8">
            <h3 className="font-serif text-[1.9rem] font-semibold tracking-[-0.02em] text-[var(--ink-main)]">
              Образование и развитие
            </h3>
            <p className="mt-4 text-[1.02rem] leading-8 text-[var(--ink-soft)]">
              Я продолжаю профессиональную подготовку и регулярную супервизию,
              чтобы сохранять качество и этичность практики.
            </p>
          </article>
          <article className="surface-card p-7 md:p-8">
            <h3 className="font-serif text-[1.9rem] font-semibold tracking-[-0.02em] text-[var(--ink-main)]">
              Этика и границы
            </h3>
            <p className="mt-4 text-[1.02rem] leading-8 text-[var(--ink-soft)]">
              Конфиденциальность, уважение к автономии и внимательное отношение к
              границам остаются базой всей совместной работы.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
