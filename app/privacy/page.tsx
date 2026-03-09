import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Психотерапевт в Таллине — Kairos",
  description: "Индивидуальная психотерапия в Таллине и онлайн.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-6 px-6 py-12 md:px-10 md:py-16">
      <h1 className="text-4xl font-medium md:text-5xl">Политика конфиденциальности</h1>
      <p className="text-lg leading-relaxed text-[#49504a]">
        Это временный текст политики конфиденциальности. Здесь будет размещена информация о порядке обработки,
        хранения и защиты персональных данных клиентов.
      </p>
    </main>
  );
}
