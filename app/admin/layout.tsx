export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="grid min-h-[60vh] grid-cols-[220px_1fr] gap-4">
      <aside className="rounded-lg border bg-white p-4">
        <h2 className="mb-2 font-medium">Админка</h2>
        <nav className="flex flex-col gap-2 text-sm">
          <a href="/admin">Дашборд</a>
          <a href="/admin/users">Пользователи</a>
        </nav>
      </aside>
      <div className="rounded-lg border bg-white p-6">{children}</div>
    </section>
  );
}
