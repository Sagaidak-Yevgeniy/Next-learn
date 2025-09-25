export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <>
      <h1 className="mb-2 text-2xl font-semibold">Товар #{params.id}</h1>
      <p className="text-gray-700">Описание товара и т. п.</p>
    </>
  );
}
