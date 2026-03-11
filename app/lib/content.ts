export const practiceInfo = {
  city: "Таллин",
  officeAddress: "Tatari 56, кабинет 308",
  contactEmail: "info@kairos.ee",
  contactPhone: "+372 509 3008",
  sessionDuration: "50 минут",
  individualPrice: "60 €",
  groupPrice: "25 €",
  responseTime: "24–48 часов",
} as const;

export const firstContactFlow = [
  "Вы оставляете короткое сообщение через форму, email или телефон.",
  "Я отвечаю и предлагаю ближайшие возможные окна для встречи.",
  "Мы выбираем удобный формат: очно в кабинете или онлайн.",
] as const;

export const relatedSections = [
  {
    href: "/services",
    title: "Темы обращения",
    text: "С какими внутренними трудностями чаще всего приходят в терапию.",
  },
  {
    href: "/format",
    title: "Формат и рамка",
    text: "Как организована работа: ритм, стоимость, переносы и оплата.",
  },
  {
    href: "/faq",
    title: "Вопросы и ответы",
    text: "Частые вопросы перед первой встречей и о процессе терапии.",
  },
  {
    href: "/contacts",
    title: "Запись и контакты",
    text: "Как связаться и сделать первый шаг в удобном для вас темпе.",
  },
] as const;
