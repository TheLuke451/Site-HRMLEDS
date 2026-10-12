import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-photo">
        <Image
          src={product.image}
          alt={product.imageAlt}
          width={300}
          height={220}
          sizes="(max-width: 470px) 88vw, (max-width: 760px) 42vw, 30vw"
        />
        <span className="photo-index">{product.id}</span>
      </div>
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
      </div>
    </article>
  );
}
