import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, plus } from "../store/cartSlice";

export default function Cart() {
  const carts = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrease = (productId) => {
    dispatch(plus({ id: productId }));
  };

  const handleDecrease = (productId) => {
    // Implement logic to decrease the quantity for the specific product
    // You need to dispatch an action similar to 'plus' but for decreasing
    // Example: dispatch(minus({ id: productId }));
  };

  return (
    <div>
      <div className="productsWrapper">
        {carts.map((product) => (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => handleIncrease(product.id)} className="btn">
              +
            </button>
            <button onClick={() => handleDecrease(product.id)} className="btn">
              -
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
