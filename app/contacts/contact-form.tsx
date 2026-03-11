"use client";

import { FormEvent, useRef, useState } from "react";

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

type ApiResponse = {
  ok?: boolean;
  error?: string;
};

export default function ContactForm() {
  const startedAtRef = useRef<number>(Date.now());

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("formStartedAt", String(startedAtRef.current));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const rawText = await response.text();

      let data: ApiResponse = {};

      try {
        data = rawText ? (JSON.parse(rawText) as ApiResponse) : {};
      } catch {
        throw new Error("Сервер вернул некорректный ответ.");
      }

      if (!response.ok) {
        throw new Error(data.error || "Не удалось отправить сообщение.");
      }

      setStatus({
        type: "success",
        message:
          "Сообщение отправлено. Я постараюсь ответить в ближайшее время.",
      });

      form.reset();
      startedAtRef.current = Date.now();
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Произошла ошибка при отправке формы.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <input
        type="hidden"
        name="formStartedAt"
        value={startedAtRef.current}
        readOnly
      />

      <div>
        <label htmlFor="name" className="mb-1 block text-sm text-[#49504a]">
          Имя
        </label>
        <input
          id="name"
          name="name"
          required
          minLength={2}
          maxLength={100}
          autoComplete="name"
          className="w-full rounded-xl border border-[#2f3331]/20 bg-white px-4 py-3 outline-none transition focus:border-[#2f3331]/40"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm text-[#49504a]">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={150}
          autoComplete="email"
          className="w-full rounded-xl border border-[#2f3331]/20 bg-white px-4 py-3 outline-none transition focus:border-[#2f3331]/40"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1 block text-sm text-[#49504a]">
          Телефон (необязательно)
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          maxLength={30}
          autoComplete="tel"
          className="w-full rounded-xl border border-[#2f3331]/20 bg-white px-4 py-3 outline-none transition focus:border-[#2f3331]/40"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm text-[#49504a]">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          minLength={10}
          maxLength={3000}
          className="w-full rounded-xl border border-[#2f3331]/20 bg-white px-4 py-3 outline-none transition focus:border-[#2f3331]/40"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-xl bg-[#2f3331] px-6 py-3 text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Отправка..." : "Отправить сообщение"}
      </button>

      <p className="text-xs leading-relaxed text-[#767b75]">
        Нажимая кнопку, вы соглашаетесь с обработкой персональных данных в
        соответствии с политикой конфиденциальности.
      </p>

      {status.type === "success" && (
        <p className="text-sm leading-relaxed text-green-700">
          {status.message}
        </p>
      )}

      {status.type === "error" && (
        <p className="text-sm leading-relaxed text-red-700">
          {status.message}
        </p>
      )}
    </form>
  );
}
