import React, {useState} from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [cartItems,setCartItems] = useState([]);
  const addProduct = (pd) => {
    const hasProduct = cartItems.find(x => x.id === pd.id);
    if (hasProduct) {
      setCartItems(
        cartItems.map((x) =>
          x.id === pd.id ? { ...hasProduct, qty: hasProduct.qty + 1 } : x
        )
      );
    }else {
      setCartItems([...cartItems, {...pd, qty: 1}]);
    }
  };
  
  const removeProduct = (pd) => {
    const hasProduct = cartItems.find((x) => x.id === pd.id);
    if (hasProduct.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !==pd.id));
    }else{
      setCartItems(
        cartItems.map((x) =>
          x.id === pd.id ? { ...hasProduct, qty: hasProduct.qty - 1 } : x
        )
      );
    }
  }

  return (

    <main className="">
      <Navbar countCartItems={cartItems.length}></Navbar>
      <div className="container">
        <div className="row d-flex justify-content-between">
          <Product addProduct={addProduct}></Product>
          <Cart cartItems={cartItems} addProduct={addProduct} removeProduct={removeProduct}></Cart>
          <Footer/>
        </div>
      </div>
    </main>
  );
};

export default Shop;
