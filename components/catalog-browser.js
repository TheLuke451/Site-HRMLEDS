"use client";

import { useState } from "react";
import ProductGrid from "./product-grid";

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export default function CatalogBrowser({ products }) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const categories = [...new Set(products.map((product) => product.category))];
  const normalizedSearch = normalizeText(search);
  const filteredProducts = products.filter((product) => {
    const matchesSearch = normalizeText(`${product.name} ${product.code}`).includes(normalizedSearch);
    const matchesCategory = category === "all" || product.category === category;
    return matchesSearch && matchesCategory;
  });

  function clearFilters() {
    setSearch("");
    setCategory("all");
  }

  return (
    <>
      <div className="catalog-filters">
        <label className="catalog-filter-field">
          <span>Buscar por nome ou código</span>
          <input
            type="search"
            value={search}
            maxLength={50}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Ex.: luminária ou sinalizador"
          />
        </label>
        <label className="catalog-filter-field">
          <span>Categoria</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="all">Todas as categorias</option>
            {categories.map((item) => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>
      </div>

      <div className="catalog-results-heading">
        <p className="catalog-count" aria-live="polite">
          {filteredProducts.length} de {products.length} produtos demonstrativos
        </p>
        {(search || category !== "all") && (
          <button className="catalog-clear-button" type="button" onClick={clearFilters}>
            Limpar busca e filtro
          </button>
        )}
      </div>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <p className="catalog-empty" role="status">
          Nenhum produto encontrado. Tente outro nome, código ou categoria.
        </p>
      )}
    </>
  );
}
