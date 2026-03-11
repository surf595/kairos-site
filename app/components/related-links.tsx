import Link from "next/link";

type RelatedItem = {
  href: string;
  title: string;
  text: string;
};

export default function RelatedLinks({
  title,
  items,
}: {
  title: string;
  items: readonly RelatedItem[];
}) {
  return (
    <section className="v07-related-wrap">
      <h2 className="v07-related-title">{title}</h2>
      <div className="v07-related-grid">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="v07-related-card">
            <div className="v07-related-card-title">{item.title}</div>
            <p className="v07-related-card-text">{item.text}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
