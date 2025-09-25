export const metadata = { title: "Блог" };

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid gap-6 md:grid-cols-[240px_1fr]">
      <aside className="rounded-lg border bg-white p-4">
        <h2 className="mb-2 font-medium">Разделы блога</h2>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>Новости</li>
          <li>Туториалы</li>
          <li>Мнения</li>
        </ul>
      </aside>
      <div>{children}</div>
    </section>
  );
}
