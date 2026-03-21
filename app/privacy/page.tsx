import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности | Kairos Therapy",
  description: "Политика обработки персональных данных Kairos Therapy",
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

export default function PrivacyPage() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
        <div className="mb-12 border-b border-[var(--border-soft)] pb-8">
          <h1 className="title-section">Политика конфиденциальности</h1>
          <p className="mt-4 text-[var(--ink-soft)]">
            Настоящая политика конфиденциальности описывает, как Kairos Therapy OÜ
            собирает, использует и защищает персональные данные пользователей сайта.
          </p>
          <p className="mt-2 text-sm text-[var(--ink-muted)]">Последнее обновление: 10 марта 2026</p>
        </div>

        <div className="space-y-12">
          <Section title="1. Оператор персональных данных"><p>Kairos Therapy OÜ<br/>Регистрационный номер: 17338080<br/>Адрес: Tatari 56, кабинет 308, Tallinn, Estonia<br/>Email: info@kairos.ee<br/>Телефон: +372 509 3008</p></Section>
          <Section title="2. Какие данные мы можем собирать"><ul className="list-disc space-y-2 pl-6"><li>имя</li><li>номер телефона</li><li>адрес электронной почты</li><li>сообщение, отправленное через форму сайта</li><li>информация о записи на консультацию</li><li>технические данные посещения сайта (IP, браузер, устройство)</li></ul></Section>
          <Section title="3. Как мы получаем данные"><ul className="list-disc space-y-2 pl-6"><li>через форму обратной связи</li><li>по электронной почте</li><li>по телефону</li><li>при записи на консультацию</li></ul></Section>
          <Section title="4. Цели обработки данных"><ul className="list-disc space-y-2 pl-6"><li>ответ на запросы пользователей</li><li>организация консультаций</li><li>административное управление записью</li><li>улучшение работы сайта</li><li>выполнение юридических и бухгалтерских обязательств</li></ul></Section>
          <Section title="5. Правовые основания обработки"><p>Обработка данных осуществляется на основании:</p><ul className="list-disc space-y-2 pl-6"><li>согласия пользователя</li><li>подготовки или исполнения договора</li><li>законных обязательств</li><li>законного интереса оператора</li></ul></Section>
          <Section title="6. Хранение данных"><p>Персональные данные хранятся только в течение срока, необходимого для выполнения целей обработки, либо в соответствии с требованиями законодательства.</p></Section>
          <Section title="7. Передача данных третьим лицам"><p>Мы не продаём и не передаём персональные данные третьим лицам, за исключением случаев:</p><ul className="list-disc space-y-2 pl-6"><li>когда это требуется законом</li><li>когда это необходимо для работы сервисов сайта</li><li>для бухгалтерского или технического обслуживания</li></ul></Section>
          <Section title="8. Права пользователя"><p>Вы имеете право:</p><ul className="list-disc space-y-2 pl-6"><li>получить доступ к своим данным</li><li>исправить неточные данные</li><li>потребовать удаление данных</li><li>ограничить обработку</li><li>отозвать согласие на обработку</li></ul><p>Для реализации этих прав свяжитесь с нами: info@kairos.ee</p></Section>
          <Section title="9. Безопасность данных"><p>Мы применяем разумные технические и организационные меры для защиты персональных данных от утраты, изменения или несанкционированного доступа.</p></Section>
          <Section title="10. Изменения политики"><p>Мы можем периодически обновлять настоящую политику. Актуальная версия всегда доступна на данной странице.</p></Section>
        </div>
      </div>
    </main>
  );
}
