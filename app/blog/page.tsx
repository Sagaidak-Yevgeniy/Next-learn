import Link from "next/link";

export default async function BlogIndex() {
  const posts = [
    { slug: "nextjs-layouts", title: "Как работают layout'ы в Next.js" },
    { slug: "isr-caching", title: "ISR и кэш в App Router" },
  ];

  return (
    <>
      <h1 className="mb-4 text-2xl font-semibold">Блог</h1>
      <ul className="list-disc pl-6">
        {posts.map(p => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
