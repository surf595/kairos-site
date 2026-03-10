import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Контакты — Kairos Therapy",
  description: "Контакты психотерапевтической практики Kairos Therapy в Таллине.",
};

export default function ContactsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-16 px-6 py-12 md:space-y-20 md:px-10 md:py-16">

      <header className="space-y-6">
        <h1 className="text-4xl font-medium md:text-5xl">Контакты</h1>

        <p className="text-lg leading-relaxed text-[#49504a]">
          Вы можете связаться со мной по телефону, электронной почте или
          через форму обратной связи.  
          Кратко опишите ваш вопрос или ситуацию, и я постараюсь ответить
          в ближайшее время.
        </p>
      </header>

      {/* Контактная информация */}

      <section className="space-y-6 text-lg text-[#49504a]">
        <div>
          <h2 className="text-2xl font-medium mb-2">Телефон</h2>
          <a
            href="tel:+3725093008"
            className="hover:underline"
          >
            +372 509 3008
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-2">Email</h2>
          <a
            href="mailto:info@kairos.ee"
            className="hover:underline"
          >
            info@kairos.ee
          </a>
        </div>

        <div>
          <h2 className="text-2xl font-medium mb-2">Адрес кабинета</h2>
          <p>
            Татари 56, кабинет 308<br />
            Таллин, Эстония
          </p>
        </div>
      </section>

      {/* Карта */}

      <section className="space-y-5">
        <h2 className="text-2xl font-medium md:text-3xl">Как добраться</h2>

        <div className="overflow-hidden rounded-2xl border border-[#2f3331]/15">
          <iframe
            src="https://www.google.com/maps?q=Tatari+56+Tallinn&output=embed"
            width="100%"
            height="400"
            loading="lazy"
          />
        </div>
      </section>

      {/* Форма */}

      <section className="space-y-6 rounded-3xl border border-[#2f3331]/15 bg-[#f8f4ed]/75 p-8">
        <h2 className="text-2xl font-medium md:text-3xl">
          Форма обратной связи
        </h2>

        <form
          action="/api/contact"
          method="POST"
          className="space-y-6 max-w-xl"
        >
          <div>
            <label className="block text-sm mb-1">
              Имя
            </label>
            <input
              name="name"
              required
              className="w-full rounded-lg border border-[#2f3331]/20 p-3"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-[#2f3331]/20 p-3"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Сообщение
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-[#2f3331]/20 p-3"
            />
          </div>

          <button
            type="submit"
            className="rounded-xl bg-[#2f3331] px-6 py-3 text-white hover:opacity-90"
          >
            Отправить сообщение
          </button>
        </form>
      </section>

      {/* Реквизиты */}

      <section className="space-y-3 text-sm text-[#737972]">
        <p>Kairos Therapy OÜ</p>
        <p>Reg. nr. 17338080</p>
        <p>Таллин, Эстония</p>
      </section>

    </main>
  );
}