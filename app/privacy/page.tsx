import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — Kairos Therapy",
  description: "Политика обработки персональных данных Kairos Therapy OÜ.",
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
      <h2 className="text-2xl font-semibold text-[#1F1C18]">{title}</h2>
      <div className="space-y-4 text-[15px] leading-7 text-[#595249]">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="bg-[#F3EEE6] text-[#26231F]">
      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-16">
        <div className="rounded-[28px] border border-[#D8CCBE] bg-[#F8F4EE] p-8 md:p-10">
          <h1 className="text-4xl font-semibold tracking-tight text-[#171614] md:text-5xl">
            Политика конфиденциальности
          </h1>

          <p className="mt-5 max-w-3xl text-[16px] leading-7 text-[#595249]">
            Здесь описано, какие данные собираются при обращении в Kairos Therapy,
            как они используются и как защищаются.
          </p>

          <p className="mt-2 text-sm text-[#7B6F62]">
            Последнее обновление: 10 марта 2026
          </p>
        </div>

        <div className="mt-10 space-y-10 rounded-[28px] border border-[#D8CCBE] bg-[#FBF8F3] p-8 md:p-10">
          <Section title="1. Оператор персональных данных">
            <p>
              Kairos Therapy OÜ
              <br />
              Регистрационный номер: 17338080
              <br />
              Адрес: Tatari 56, кабинет 308, Таллин, Эстония
              <br />
              Email: info@kairos.ee
              <br />
              Телефон: +372 509 3008
            </p>
          </Section>

          <Section title="2. Какие данные могут обрабатываться">
            <ul className="list-disc space-y-2 pl-6">
              <li>имя;</li>
              <li>номер телефона (если вы его указываете);</li>
              <li>адрес электронной почты;</li>
              <li>сообщение, отправленное через форму сайта;</li>
              <li>данные о записи на консультацию;</li>
              <li>технические данные посещения сайта (IP, браузер, устройство).</li>
            </ul>
          </Section>

          <Section title="3. Источники получения данных">
            <ul className="list-disc space-y-2 pl-6">
              <li>форма обратной связи на сайте;</li>
              <li>электронная почта;</li>
              <li>телефонная связь;</li>
              <li>обсуждение записи на консультацию.</li>
            </ul>
          </Section>

          <Section title="4. Цели обработки данных">
            <ul className="list-disc space-y-2 pl-6">
              <li>ответ на ваши обращения;</li>
              <li>организация консультаций;</li>
              <li>административное сопровождение записи;</li>
              <li>обеспечение корректной работы сайта;</li>
              <li>выполнение юридических и бухгалтерских обязательств.</li>
            </ul>
          </Section>

          <Section title="5. Правовые основания">
            <ul className="list-disc space-y-2 pl-6">
              <li>согласие пользователя;</li>
              <li>подготовка и исполнение договора;</li>
              <li>законные обязательства оператора;</li>
              <li>законный интерес оператора.</li>
            </ul>
          </Section>

          <Section title="6. Срок хранения">
            <p>
              Данные хранятся не дольше, чем это необходимо для целей обработки,
              либо в пределах сроков, установленных законодательством.
            </p>
          </Section>

          <Section title="7. Передача третьим лицам">
            <p>
              Данные не продаются и не передаются третьим лицам, кроме случаев,
              когда это требуется законом или необходимо для технического и
              бухгалтерского сопровождения деятельности.
            </p>
          </Section>

          <Section title="8. Права пользователя">
            <p>Вы можете запросить:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>доступ к своим данным;</li>
              <li>исправление неточностей;</li>
              <li>удаление данных;</li>
              <li>ограничение обработки;</li>
              <li>отзыв согласия на обработку.</li>
            </ul>
            <p>По вопросам, связанным с данными: info@kairos.ee.</p>
          </Section>

          <Section title="9. Безопасность данных">
            <p>
              Применяются разумные технические и организационные меры для защиты
              данных от утраты, изменения и несанкционированного доступа.
            </p>
          </Section>

          <Section title="10. Изменения политики">
            <p>
              Политика может обновляться. Актуальная версия всегда размещается на
              этой странице.
            </p>
          </Section>
        </div>

        <div className="mt-8 rounded-2xl border border-[#D8CCBE] bg-[#EFE7DC] p-6 text-sm leading-7 text-[#5D554B]">
          Возникли вопросы по обработке данных? Вы можете написать через
          <span className="mx-1">
            <Link href="/contacts" className="underline underline-offset-4">
              страницу контактов
            </Link>
          </span>
          или на info@kairos.ee.
        </div>
      </div>
    </main>
  );
}
