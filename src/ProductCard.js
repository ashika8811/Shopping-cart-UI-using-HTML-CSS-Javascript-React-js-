import React from 'react';

const ProductCard = ({ product, onAddToCart, onQuantityChange }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <div className="product-info">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <span className="price">&#8377;{product.price.toFixed(2)}</span>
        <Rating rating={product.rating} />
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        {/* Optionally, you can include a quantity selector */}
        {/* <input type="number" value={product.quantity} onChange={(e) => onQuantityChange(product, e.target.value)} /> */}
      </div>
    </div>
  );
};

const Rating = ({ rating }) => {
  // Assuming rating is a number between 0 and 5
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<span key={i}>&#9733;</span>); // Full star
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Empty star
    }
  }
  return <div className="rating">{stars}</div>;
};

export default ProductCard;
