import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Психотерапевт в Таллине — Kairos",
  description: "Индивидуальная психотерапия в Таллине и онлайн.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-10 px-6 py-12 md:px-10 md:py-16">
      <h1 className="text-4xl font-medium md:text-5xl">Обо мне</h1>
      <div className="space-y-5 text-lg leading-relaxed text-[#49504a]">
        <p>
          Я веду частную психотерапевтическую практику. В работе меня интересует не только симптом, но и
          внутренние конфликты, повторяющиеся жизненные сценарии и то, как человек переживает отношения.
        </p>
        <p>
          Психотерапия — это пространство, где постепенно становится возможным понять то, что раньше казалось
          хаотичным или непонятным.
        </p>
      </div>

      <section className="space-y-4 rounded-3xl border border-[#2f3331]/15 bg-[#f8f4ed]/75 p-8">
        <h2 className="text-2xl font-medium md:text-3xl">Где проходит работа</h2>
        <ul className="space-y-2 text-lg text-[#49504a]">
          <li>— кабинет в Таллине</li>
          <li>— онлайн</li>
        </ul>
      </section>
    </main>
  );
}
