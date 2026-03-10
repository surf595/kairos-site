import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type RateEntry = {
  count: number;
  firstRequestAt: number;
};

const rateLimitStore = new Map<string, RateEntry>();

const WINDOW_MS = 60 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const MIN_FORM_FILL_TIME_MS = 3000;

function clean(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeText(value: string): string {
  return value.replace(/\r\n/g, "\n").trim();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function getClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return req.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);

  if (!existing) {
    rateLimitStore.set(ip, { count: 1, firstRequestAt: now });
    return false;
  }

  if (now - existing.firstRequestAt > WINDOW_MS) {
    rateLimitStore.set(ip, { count: 1, firstRequestAt: now });
    return false;
  }

  existing.count += 1;
  rateLimitStore.set(ip, existing);

  return existing.count > MAX_REQUESTS_PER_WINDOW;
}

function json(data: unknown, status = 200) {
  return NextResponse.json(data, {
    status,
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const name = normalizeText(clean(formData.get("name")));
    const email = normalizeText(clean(formData.get("email")));
    const message = normalizeText(clean(formData.get("message")));
    const company = clean(formData.get("company"));
    const formStartedAtRaw = clean(formData.get("formStartedAt"));

    const formStartedAt = Number(formStartedAtRaw);
    const ip = getClientIp(req);

    if (company) {
      return json({ ok: true });
    }

    if (
      Number.isFinite(formStartedAt) &&
      formStartedAt > 0 &&
      Date.now() - formStartedAt < MIN_FORM_FILL_TIME_MS
    ) {
      return json({ error: "Форма отправлена слишком быстро." }, 400);
    }

    if (isRateLimited(ip)) {
      return json(
        { error: "Слишком много запросов. Попробуйте позже." },
        429
      );
    }

    if (!name || name.length < 2 || name.length > 100) {
      return json({ error: "Некорректное имя." }, 400);
    }

    if (!email || email.length > 150 || !isValidEmail(email)) {
      return json({ error: "Некорректный email." }, 400);
    }

    if (!message || message.length < 10 || message.length > 3000) {
      return json(
        { error: "Сообщение должно содержать от 10 до 3000 символов." },
        400
      );
    }

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
    const SMTP_SECURE = process.env.SMTP_SECURE === "true";
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;

    if (!SMTP_HOST) {
      return json({ error: "Не задан SMTP_HOST в .env.local" }, 500);
    }

    if (!SMTP_USER) {
      return json({ error: "Не задан SMTP_USER в .env.local" }, 500);
    }

    if (!SMTP_PASS) {
      return json({ error: "Не задан SMTP_PASS в .env.local" }, 500);
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kairos Therapy" <${SMTP_FROM}>`,
      to: "info@kairos.ee",
      replyTo: email,
      subject: `Новая заявка с сайта от ${name}`,
      text: [
        "Новая заявка с сайта Kairos Therapy",
        "",
        `Имя: ${name}`,
        `Email: ${email}`,
        `IP: ${ip}`,
        "",
        "Сообщение:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Новая заявка с сайта Kairos Therapy</h2>
          <p><strong>Имя:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>IP:</strong> ${escapeHtml(ip)}</p>
          <p><strong>Сообщение:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        </div>
      `,
    });

    return json({ ok: true });
  } catch (error) {
    console.error("CONTACT_FORM_ERROR:", error);

    const message =
      error instanceof Error ? error.message : "Не удалось отправить сообщение.";

    return json({ error: message }, 500);
  }
}