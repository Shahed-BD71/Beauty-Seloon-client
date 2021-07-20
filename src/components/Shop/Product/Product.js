import React from "react";
import { useState, useEffect } from "react";
// import productData from "../fakeData";
import ProductDetails from "../ProductDetails/ProductDetails";

const Product = ({addProduct}) => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch(`http://localhost:8000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <section className="col-md-7 col-7">
      <h3 className="text-center fw-bolder text-brand mt-5">
        Try Our Products
      </h3>
      {products.map((pd) => (
        <ProductDetails
          pd={pd}
          addProduct={addProduct}
          key={pd._id}
        ></ProductDetails>
      ))}
    </section>
  );
};

export default Product;
