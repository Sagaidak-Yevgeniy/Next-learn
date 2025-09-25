export const metadata = { title: "Магазин" };

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid gap-6 md:grid-cols-[200px_1fr]">
      <aside className="rounded-lg border bg-white p-4">
        <h2 className="mb-2 font-medium">Категории</h2>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>Курсы</li>
          <li>Мерч</li>
        </ul>
      </aside>
      <div>{children}</div>
    </section>
  );
}
