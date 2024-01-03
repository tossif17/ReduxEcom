import React from "react";
import Products from "../components/Products";

export default function Home() {
  return (
    <>
      <div>
        <h2>Welcome to my store</h2>
        <section>
          <h3>Producst</h3>
          <Products />
        </section>
      </div>
    </>
  );
}
