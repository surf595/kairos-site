import Link from "next/link";
import RelatedLinks from "../components/related-links";
import { practiceInfo, relatedSections } from "../lib/content";
import { buildPageMetadata } from "../lib/seo";

export const metadata = buildPageMetadata({
  title: "Условия использования",
  description: "Условия использования сайта и оказания психологических услуг.",
  path: "/terms",
});

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

export default function TermsPage() {
  return (
    <main className="bg-[#F3EEE6] text-[#26231F]">
      <div className="mx-auto max-w-5xl px-6 py-14 md:px-10 md:py-16">
        <div className="rounded-[28px] border border-[#D8CCBE] bg-[#F8F4EE] p-8 md:p-10">
          <h1 className="text-4xl font-semibold tracking-tight text-[#171614] md:text-5xl">
            Условия использования
          </h1>

          <p className="mt-5 max-w-3xl text-[16px] leading-7 text-[#595249]">
            Настоящие условия регулируют использование сайта частной практики и
            порядок оказания психологических услуг.
          </p>

          <p className="mt-2 text-sm text-[#7B6F62]">
            Последнее обновление: 10 марта 2026
          </p>
        </div>

        <div className="mt-10 space-y-10 rounded-[28px] border border-[#D8CCBE] bg-[#FBF8F3] p-8 md:p-10">
          <Section title="1. Поставщик услуг">
            <p>
              Оператор практики
              <br />
              Регистрационный номер: 17338080
              <br />
              Адрес: {practiceInfo.officeAddress}, Таллин, Эстония
              <br />
              Email: {practiceInfo.contactEmail}
              <br />
              Телефон: {practiceInfo.contactPhone}
            </p>
          </Section>

          <Section title="2. Характер услуг">
            <p>
              Практика предоставляет психологическое консультирование и
              психотерапию.
            </p>
            <p>
              Материалы сайта носят информационный характер и не заменяют
              персональную консультацию специалиста.
            </p>
          </Section>

          <Section title="3. Запись на консультацию">
            <p>
              Запись возможна через сайт, по электронной почте или по телефону.
            </p>
            <p>
              Сессия считается подтверждённой после согласования времени между
              специалистом и клиентом.
            </p>
          </Section>

          <Section title="4. Стоимость услуг">
            <ul className="list-disc space-y-2 pl-6">
              <li>индивидуальная сессия — {practiceInfo.individualPrice};</li>
              <li>групповая работа — {practiceInfo.groupPrice}.</li>
            </ul>
          </Section>

          <Section title="5. Отмена и перенос встречи">
            <p>
              Если вы не можете прийти на сессию, пожалуйста сообщите об этом
              заранее.
            </p>
            <p>При отмене менее чем за 24 часа сессия может быть оплачена полностью.</p>
          </Section>

          <Section title="6. Онлайн-сессии">
            <p>
              При онлайн-формате клиент отвечает за стабильное подключение к
              интернету и за возможность находиться в конфиденциальной обстановке.
            </p>
          </Section>

          <Section title="7. Конфиденциальность">
            <p>
              Информация, обсуждаемая в ходе терапии, рассматривается как
              конфиденциальная в пределах, предусмотренных законом и
              профессиональной этикой.
            </p>
          </Section>

          <Section title="8. Ограничение ответственности">
            <p>
              Результаты психотерапии индивидуальны и не могут быть гарантированы
              заранее.
            </p>
          </Section>

          <Section title="9. Изменение условий">
            <p>
              Оператор практики может обновлять настоящие условия. Актуальная
              версия всегда доступна на этой странице.
            </p>
          </Section>

          <Section title="10. Применимое право">
            <p>
              Настоящие условия регулируются законодательством Эстонии и правом
              Европейского союза.
            </p>
          </Section>
        </div>

        <div className="mt-8 rounded-2xl border border-[#D8CCBE] bg-[#EFE7DC] p-6 text-sm leading-7 text-[#5D554B]">
          Если у вас есть уточняющие вопросы, вы можете перейти на
          <span className="mx-1">
            <Link href="/contacts" className="underline underline-offset-4">
              страницу контактов
            </Link>
          </span>
          и связаться удобным способом.
        </div>

        <div className="mt-10">
          <RelatedLinks
            title="Что ещё важно перед началом"
            items={relatedSections.filter((item) => !["/terms", "/privacy"].includes(item.href))}
          />
        </div>
      </div>
    </main>
  );
}
