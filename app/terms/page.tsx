import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Условия использования | Kairos Therapy",
  description: "Условия использования сайта и услуг Kairos Therapy",
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="font-serif text-[1.85rem] font-semibold text-[var(--ink-main)]">{title}</h2>
      <div className="space-y-4 text-[15px] leading-7 text-[var(--ink-soft)]">{children}</div>
    </section>
  );
}

export default function TermsPage() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <div className="mb-12 border-b border-[var(--border-soft)] pb-8">
          <h1 className="title-section">Условия использования</h1>
          <p className="mt-4 text-[var(--ink-soft)]">
            Настоящие условия регулируют использование сайта Kairos Therapy и
            порядок оказания психологических услуг.
          </p>
          <p className="mt-2 text-sm text-[var(--ink-muted)]">Последнее обновление: 10 марта 2026</p>
        </div>

        <div className="space-y-12">
          <Section title="1. Поставщик услуг"><p>Kairos Therapy OÜ<br/>Рег. номер: 17338080<br/>Адрес: Tatari 56, кабинет 308, Tallinn<br/>Email: info@kairos.ee<br/>Телефон: +372 509 3008</p></Section>
          <Section title="2. Характер услуг"><p>Kairos Therapy предоставляет психологическое консультирование и психотерапию.</p><p>Информация на сайте носит ознакомительный характер и не заменяет профессиональную консультацию.</p></Section>
          <Section title="3. Запись на консультацию"><p>Запись на консультацию может осуществляться через сайт, по электронной почте или по телефону.</p><p>Сессия считается подтверждённой после согласования времени между специалистом и клиентом.</p></Section>
          <Section title="4. Стоимость услуг"><ul className="list-disc space-y-2 pl-6"><li>индивидуальная консультация — 60 €</li><li>групповая работа — 25 €</li></ul></Section>
          <Section title="5. Отмена встречи"><p>Если вы не можете прийти на сессию, просьба сообщить об этом заранее.</p><p>При отмене менее чем за 24 часа сессия может быть оплачена полностью.</p></Section>
          <Section title="6. Онлайн-сессии"><p>При проведении онлайн-сессии клиент несёт ответственность за наличие стабильного интернет-соединения и конфиденциальной обстановки.</p></Section>
          <Section title="7. Конфиденциальность"><p>Вся информация, обсуждаемая в ходе терапии, рассматривается как конфиденциальная в пределах, предусмотренных законом и профессиональной этикой.</p></Section>
          <Section title="8. Ограничение ответственности"><p>Результаты психотерапии индивидуальны и не могут быть гарантированы заранее.</p></Section>
          <Section title="9. Изменение условий"><p>Kairos Therapy может обновлять данные условия. Актуальная версия всегда доступна на сайте.</p></Section>
          <Section title="10. Применимое право"><p>Настоящие условия регулируются законодательством Эстонии и правом Европейского союза.</p></Section>
        </div>
      </div>
    </main>
  );
}
