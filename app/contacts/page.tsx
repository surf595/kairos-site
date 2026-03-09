import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Психотерапевт в Таллине — Kairos",
  description: "Индивидуальная психотерапия в Таллине и онлайн.",
};

export default function ContactsPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-10 px-6 py-12 md:px-10 md:py-16">
      <h1 className="text-4xl font-medium md:text-5xl">Контакты</h1>

      <section className="space-y-6 rounded-3xl border border-[#2f3331]/15 bg-[#f8f4ed]/75 p-8 text-lg text-[#49504a]">
        <p>
          <span className="block text-base font-medium text-[#2f3331]">Телефон</span>
          <a href="tel:+3725093008" className="hover:underline">
            +372 50 93008
          </a>
        </p>

        <p>
          <span className="block text-base font-medium text-[#2f3331]">Адрес</span>
          Tatari 56
          <br />
          кабинет 308
          <br />
          Tallinn, Estonia
        </p>

        <p>
          <span className="block text-base font-medium text-[#2f3331]">Email</span>
          <a href="mailto:hello@kairos.ee" className="hover:underline">
            hello@kairos.ee
          </a>
        </p>
      </section>
    </main>
  );
}
