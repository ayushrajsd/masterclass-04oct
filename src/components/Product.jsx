import { CartContext } from "../context/CartContext";
import "./Product.css";
import { useState, useContext } from "react";

const Product = ({ title, price, image, id }) => {
  //   const [inCart, setInCart] = useState(false); // false
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const inCart = cart.some((item) => item.id === id);
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-details">
        <h3>{price}</h3>
        <span>{title}</span>

        {!inCart ? (
          <button onClick={() => addToCart({ id, title, price, image })}>
            Add
          </button>
        ) : (
          <button onClick={() => removeFromCart(id)}>Remove</button>
        )}
      </div>
    </div>
  );
};

export default Product;
