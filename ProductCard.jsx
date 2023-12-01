import React from 'react';
import './ProductCard.css';
import { FaShoppingCart } from 'react-icons/fa';

function ProductCard() {
  return (
    <section className="product-card">

      <img 
        src="http://http2.mlstatic.com/D_675781-MLU69496230451_052023-W.jpg" 
        alt="product" 
        className="card__image" />

      <div className="card__infos">
        <h2 className="card__price">R$ 200.20</h2>
        <h2 className="card__title">Manual do Dev</h2>
      </div>

      <button type="button" className="button__add-cart>">
        <FaShoppingCart />
      </button>
    </section>
  );
}

export default ProductCard;
