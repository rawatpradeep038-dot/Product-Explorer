import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, loading, error, onToggleFavorite, favorites }) {
  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error">
        <p>❌ {error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="no-products">
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem
          key={product.id}
          product={product}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.includes(product.id)}
        />
      ))}
    </div>
  );
}

export default ProductList;