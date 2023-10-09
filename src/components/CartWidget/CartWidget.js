import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {allProducts, cart} = useCartContext();
  
  return (
    <div>
      <button type="button" className="btn colorCartButton position-relative">
      <i className="bi bi-cart-fill"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {allProducts() || cart}
        </span>
      </button>
    </div>
  );
};

export default CartWidget;
