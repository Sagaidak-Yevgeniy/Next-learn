import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "CodeMastersPRO",
  description: "Учебный проект на Next.js",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-dvh bg-gray-50">
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-5xl gap-4 p-4">
            <Link href="/">Главная</Link>
            <Link href="/about">О нас</Link>
            <Link href="/blog">Блог</Link>
            <Link href="/shop">Магазин</Link>
            <Link href="/admin">Админка</Link>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl p-6">{children}</main>
        <footer className="border-t bg-white p-4 text-center">
          © CodeMastersPRO
        </footer>
      </body>
    </html>
  );
}
