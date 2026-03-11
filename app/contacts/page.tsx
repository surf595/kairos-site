import { buildPageMetadata } from "../lib/seo";
import { firstContactFlow, practiceInfo, relatedSections } from "../lib/content";
import RelatedLinks from "../components/related-links";
import ContactForm from "./contact-form";

export const metadata = buildPageMetadata({
  title: "Контакты",
  description: "Контакты частной психотерапевтической практики в Таллине.",
  path: "/contacts",
});

export default function ContactsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8 md:px-10 md:py-10">
      <section className="mb-6 max-w-2xl">
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
          Контакты
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-[#49504a]">
          Вы можете написать через форму обратной связи или связаться со мной
          напрямую. Приём осуществляется по предварительной записи.
        </p>

        <p className="mt-3 text-sm leading-relaxed text-[#6a706a]">
          Обычно я отвечаю в течение {practiceInfo.responseTime}. Ваше обращение остаётся
          конфиденциальным.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="rounded-3xl border border-[#2f3331]/15 bg-[#f8f4ed]/75 p-6 md:p-8">
          <h2 className="text-2xl font-medium md:text-3xl">
            Форма обратной связи
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#737972]">
            Вы можете кратко описать ваш вопрос или ситуацию. Я постараюсь
            ответить в ближайшее время.
          </p>

          <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm leading-relaxed text-[#6a706a]">
            {firstContactFlow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <ContactForm />
        </div>

        <div className="space-y-6">
          <div className="rounded-3xl border border-[#2f3331]/15 bg-white p-6 md:p-8">
            <h2 className="text-2xl font-medium md:text-3xl">
              Контактная информация
            </h2>

            <div className="mt-6 space-y-5 text-[#49504a]">
              <div>
                <h3 className="mb-1 text-base font-medium text-[#2f3331]">
                  Телефон
                </h3>
                <a href="tel:+3725093008" className="hover:underline">
                  {practiceInfo.contactPhone}
                </a>
              </div>

              <div>
                <h3 className="mb-1 text-base font-medium text-[#2f3331]">
                  Email
                </h3>
                <a href={`mailto:${practiceInfo.contactEmail}`} className="hover:underline">
                  {practiceInfo.contactEmail}
                </a>
              </div>

              <div>
                <h3 className="mb-1 text-base font-medium text-[#2f3331]">
                  Адрес кабинета
                </h3>
                <p>
                  {practiceInfo.officeAddress}
                  <br />
                  Таллин, Эстония
                </p>
              </div>

              <div>
                <h3 className="mb-1 text-base font-medium text-[#2f3331]">
                  Часы приёма
                </h3>
                <p>
                  Понедельник — 09:00–19:00
                  <br />
                  Вторник — 09:00–19:00
                  <br />
                  Среда — 09:00–14:00
                  <br />
                  Четверг — 09:00–19:00
                  <br />
                  Пятница — 09:00–19:00
                  <br />
                  Суббота — 09:00–15:00
                  <br />
                  Воскресенье — выходной
                </p>
              </div>

              <div className="pt-2 text-sm text-[#737972]">
                <p>Юридические данные предоставляются по запросу.</p>
                <p>Reg. nr. 17338080</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#2f3331]/15 bg-white">
            <iframe
              title="Карта кабинета"
              src="https://www.google.com/maps?q=Tatari+56+Tallinn&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              className="block"
            />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <RelatedLinks
          title="Перед первой встречей"
          items={relatedSections.filter((item) => item.href !== "/contacts")}
        />
      </section>
    </main>
  );
}
