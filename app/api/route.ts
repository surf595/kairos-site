import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type RateEntry = {
  count: number;
  firstRequestAt: number;
};

const rateLimitStore = new Map<string, RateEntry>();

const WINDOW_MS = 60 * 60 * 1000; // 1 час
const MAX_REQUESTS_PER_WINDOW = 5;
const MIN_FORM_FILL_TIME_MS = 3000;

function clean(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
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

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeText(value: string): string {
  return value.replace(/\r\n/g, "\n").trim();
}

export async function POST(req: NextRequest) {
  try {
    const origin = req.headers.get("origin");
    const requestOrigin = req.nextUrl.origin;

    if (origin && origin !== requestOrigin) {
      return NextResponse.json(
        { error: "Недопустимый источник запроса." },
        { status: 403 }
      );
    }

    const formData = await req.formData();

    const name = normalizeText(clean(formData.get("name")));
    const email = normalizeText(clean(formData.get("email")));
    const message = normalizeText(clean(formData.get("message")));
    const company = clean(formData.get("company"));
    const formStartedAtRaw = clean(formData.get("formStartedAt"));

    const formStartedAt = Number(formStartedAtRaw);
    const ip = getClientIp(req);

    if (company) {
      return NextResponse.json({ ok: true });
    }

    if (
      Number.isFinite(formStartedAt) &&
      formStartedAt > 0 &&
      Date.now() - formStartedAt < MIN_FORM_FILL_TIME_MS
    ) {
      return NextResponse.json(
        { error: "Форма отправлена слишком быстро." },
        { status: 400 }
      );
    }

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Слишком много запросов. Попробуйте позже." },
        { status: 429 }
      );
    }

    if (!name || name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: "Некорректное имя." },
        { status: 400 }
      );
    }

    if (!email || email.length > 150 || !isValidEmail(email)) {
      return NextResponse.json(
        { error: "Некорректный email." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10 || message.length > 3000) {
      return NextResponse.json(
        { error: "Сообщение должно содержать от 10 до 3000 символов." },
        { status: 400 }
      );
    }

    if (!process.env.SMTP_HOST) {
      throw new Error("SMTP_HOST is missing");
    }

    if (!process.env.SMTP_USER) {
      throw new Error("SMTP_USER is missing");
    }

    if (!process.env.SMTP_PASS) {
      throw new Error("SMTP_PASS is missing");
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kairos Therapy" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
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

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("CONTACT_FORM_ERROR:", error);

    return NextResponse.json(
      { error: "Не удалось отправить сообщение." },
      { status: 500 }
    );
  }
}