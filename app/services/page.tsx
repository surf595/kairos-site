import type { Metadata } from "next";

const items = [
  "Тревога и внутреннее напряжение",
  "Трудности в отношениях",
  "Повторяющиеся жизненные сценарии",
  "Кризисы и жизненные переходы",
  "Чувство пустоты",
  "Самооценка, стыд, вина",
];

export const metadata: Metadata = {
  title: "Психотерапевт в Таллине — Kairos",
  description: "Индивидуальная психотерапия в Таллине и онлайн.",
};

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-10 px-6 py-12 md:px-10 md:py-16">
      <h1 className="text-4xl font-medium md:text-5xl">С чем я работаю</h1>
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article key={item} className="rounded-3xl border border-[#2f3331]/15 bg-[#f8f4ed]/70 p-6 text-lg">
            {item}
          </article>
        ))}
      </section>
    </main>
  );
}
