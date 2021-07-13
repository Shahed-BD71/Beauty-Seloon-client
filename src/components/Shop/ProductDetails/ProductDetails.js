import React from 'react';
import './ProductDetails.css'

const ProductDetails = ({pd, addProduct}) => {
  return (
    <div className="m-5">
      <img
        className="pd-img p-3 img-fluid mx-auto rounded d-block"
        src={pd.image}
        alt={pd.name}
      ></img>
      <h3 className="py-3">{pd.name}</h3>
      <small className="">{pd.description}</small>
      <div className="my-2">
        <span className="fw-bolder">Price: ${pd.price}.00</span>
        <br></br>
        <button
          onClick={() => addProduct(pd)}
          className="btn btn-primary w-50 mt-2"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;