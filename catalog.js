const productGrid = document.querySelector("#product-grid");
const catalogStatus = document.querySelector("#catalog-status");

function createProductCard(product) {
  const card = document.createElement("article");
  card.className = "product-card";

  const photo = document.createElement("div");
  photo.className = "product-photo";

  const image = document.createElement("img");
  image.src = product.image;
  image.alt = product.imageAlt;
  image.loading = "lazy";

  const photoIndex = document.createElement("span");
  photoIndex.className = "photo-index";
  photoIndex.textContent = product.id;
  photo.append(image, photoIndex);

  const info = document.createElement("div");
  info.className = "product-info";

  const category = document.createElement("p");
  category.className = "product-category";
  category.textContent = product.category;

  const name = document.createElement("h3");
  name.textContent = product.name;

  const description = document.createElement("p");
  description.className = "product-description";
  description.textContent = product.description;

  info.append(category, name, description);
  card.append(photo, info);

  return card;
}

if (productGrid && catalogStatus) {
  const products = window.HRMProducts ?? [];
  const limit = Number(productGrid.dataset.limit);
  const visibleProducts = Number.isInteger(limit) && limit > 0
    ? products.slice(0, limit)
    : products;
  const cards = visibleProducts.map(createProductCard);

  productGrid.replaceChildren(...cards);
  catalogStatus.textContent = `${visibleProducts.length} produtos demonstrativos`;
}
