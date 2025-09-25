import Link from "next/link";

export default function ShopHome() {
  const products = [
    { id: "101", title: "Курс Python" },
    { id: "202", title: "Футболка CodeMastersPRO" },
  ];

  return (
    <>
      <h1 className="mb-4 text-2xl font-semibold">Магазин</h1>
      <ul className="grid gap-3 md:grid-cols-2">
        {products.map(p => (
          <li key={p.id} className="rounded-lg border bg-white p-4">
            <div className="font-medium">{p.title}</div>
            <Link className="text-blue-600" href={`/shop/products/${p.id}`}>
              Открыть
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
