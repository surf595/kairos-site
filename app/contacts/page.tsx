import ContactForm from "./contact-form";

export default function ContactsPage() {
  return (
    <main className="page-shell">
      <section className="section-wrap pb-10">
        <p className="eyebrow">Контакты</p>
        <h1 className="title-hero mt-4">Свяжитесь со мной</h1>
        <p className="lead mt-6">
          Если вы хотите записаться на первую встречу или задать вопрос о
          формате работы, оставьте сообщение через форму.
        </p>
      </section>

      <section className="section-wrap pt-6">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="surface-elevated p-6 md:p-8">
            <h2 className="font-serif text-[2rem] font-semibold text-[var(--ink-main)]">
              Форма обращения
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-[var(--ink-muted)]">
              Обычно я отвечаю в течение 1–2 рабочих дней.
            </p>
            <ContactForm />
          </div>

          <div className="surface-card p-6 md:p-8">
            <h2 className="font-serif text-[1.9rem] font-semibold text-[var(--ink-main)]">
              Контактная информация
            </h2>
            <div className="mt-6 space-y-5 text-[var(--ink-soft)]">
              <p>
                <strong className="font-medium text-[var(--ink-main)]">Адрес:</strong> Tatari 56,
                кабинет 308, Tallinn
              </p>
              <p>
                <strong className="font-medium text-[var(--ink-main)]">Телефон:</strong> +372 509 3008
              </p>
              <p>
                <strong className="font-medium text-[var(--ink-main)]">Email:</strong> info@kairos.ee
              </p>
              <p>
                <strong className="font-medium text-[var(--ink-main)]">Формат:</strong> очно и онлайн
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
