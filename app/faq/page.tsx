import type { Metadata } from "next";

const questions = [
  "С чем можно приходить?",
  "Нужно ли иметь чёткий запрос?",
  "Можно ли работать онлайн?",
  "Сколько длится встреча?",
  "Как записаться на консультацию?",
];

export const metadata: Metadata = {
  title: "Психотерапевт в Таллине — Kairos",
  description: "Индивидуальная психотерапия в Таллине и онлайн.",
};

export default function FaqPage() {
  return (
    <main className="mx-auto w-full max-w-5xl space-y-10 px-6 py-12 md:px-10 md:py-16">
      <h1 className="text-4xl font-medium md:text-5xl">FAQ</h1>
      <div className="space-y-4">
        {questions.map((question) => (
          <details key={question} className="rounded-2xl border border-[#2f3331]/15 bg-[#f8f4ed]/75 p-5">
            <summary className="cursor-pointer text-lg font-medium">{question}</summary>
            <p className="pt-3 text-[#49504a]">Ответ обсуждается на первичной консультации в зависимости от вашей ситуации.</p>
          </details>
        ))}
      </div>
    </main>
  );
}
