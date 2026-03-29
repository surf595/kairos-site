import type { Metadata } from "next";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Контакты — Kairos Therapy",
  description: "Контакты психотерапевтической практики Kairos Therapy в Таллине.",
};

export default function ContactsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-8 md:px-10 md:py-10">
      <section className="mb-6 max-w-2xl">
        <h1 className="text-4xl font-medium tracking-tight md:text-5xl">
          Контакты
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-[#49504a]">
          Напишите мне — можно кратко описать ситуацию или просто спросить о
          возможности встречи. Приём по предварительной записи. Отвечу в
          течение 24 часов.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="rounded-3xl border border-[#2f3331]/15 bg-[#f8f4ed]/75 p-6 md:p-8">
          <h2 className="text-2xl font-medium md:text-3xl">
            Форма обратной связи
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#737972]">
            Опишите ситуацию в нескольких словах — как вам удобно. Не нужно
            формулировать запрос идеально, просто напишите, что происходит.
          </p>

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
                  +372 509 3008
                </a>
              </div>

              <div>
                <h3 className="mb-1 text-base font-medium text-[#2f3331]">
                  Email
                </h3>
                <a href="mailto:info@kairos.ee" className="hover:underline">
                  info@kairos.ee
                </a>
              </div>

              <div>
                <h3 className="mb-1 text-base font-medium text-[#2f3331]">
                  Адрес кабинета
                </h3>
                <p>
                  Татари 56, кабинет 308
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
                <p>Kairos Therapy OÜ</p>
                <p>Reg. nr. 17338080</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#2f3331]/15 bg-white">
            <iframe
              title="Карта Kairos Therapy"
              src="https://www.google.com/maps?q=Tatari+56+Tallinn&output=embed"
              width="100%"
              height="320"
              loading="lazy"
              className="block"
            />
          </div>
        </div>
      </section>
    </main>
  );
}