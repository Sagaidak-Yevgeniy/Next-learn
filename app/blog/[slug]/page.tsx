export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <article>
      <h1 className="mb-2 text-2xl font-semibold">Пост: {params.slug}</h1>
      <p className="text-gray-700">
        Здесь контент поста. Сегмент [slug] — динамический.
      </p>
    </article>
  );
}
