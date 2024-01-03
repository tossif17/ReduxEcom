import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const iteam = useSelector((state) => state.cart);
  return (
    <>
      <div style={{ display: "flex", alignItems: "space-between" }}>
        <span className="logo">REDUX STORE </span>
        <div>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/cart">
            Cart
          </Link>
          <span className="cartCount">Cart items: {iteam.length}</span>
        </div>
      </div>
    </>
  );
}
