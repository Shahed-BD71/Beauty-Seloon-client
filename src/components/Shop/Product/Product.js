import React from "react";
import productData from "../fakeData";
import ProductDetails from "../ProductDetails/ProductDetails";

const Product = ({addProduct}) => {
  return (
    <section className="col-md-6">
      <h3 className="text-center fw-bolder text-brand mt-5">
        Try Our Products
      </h3>
      {productData.map((pd) => (
        <ProductDetails pd={pd} 
         addProduct={addProduct}
         key={pd.id}></ProductDetails>
      ))}
    </section>
  );
};

export default Product;
