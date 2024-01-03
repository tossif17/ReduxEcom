import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { Status, fetchProduct } from "../store/productSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  const cartItems = useSelector((state) => state.cart);
  // console.log(cartItems);

  useEffect(() => {
    console.log("Fetching products...");
    dispatch(fetchProduct());
  }, []);

  const handleClick = (product) => {
    const isProductInCart = cartItems.some((item) => item.id === product.id);

    if (!isProductInCart) {
      product = { ...product, quantity: 1 };
      dispatch(add(product));
    } else {
      alert(
        "These products have already been added to the cart open cart menu"
      );
    }
  };

  if (status === Status.LOADING) {
    return <h2>Loading.......</h2>;
  }
  if (status === Status.ERROR) {
    return <h2>Something went wrong</h2>;
  }

  return (
    <>
      <div className="productsWrapper">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.name} />
            <h2>{product.title}</h2>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleClick(product)} className="btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
