import React from 'react';

function ProductItem({ product, onToggleFavorite, isFavorite }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="product-image"
        />
        <button
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={() => onToggleFavorite(product.id)}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-details">
          <span className="product-price">${product.price}</span>
          <span className="product-rating">⭐ {product.rating}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;