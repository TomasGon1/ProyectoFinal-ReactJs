import React from "react";
import { useCartContext } from "../../context/cartContext";
import "./ItemCart.css"

const ItemCart = ({ item }) => {
  const { removeItem } = useCartContext();

  return (
    <div className="item-cart-container">
      <div className="item-cart">
        <div className="img-cart">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="info-cart">
          <h2 className="tittle-cart">Nombre: {item.name}</h2>
          <p className="quantity-cart">Cantidad: {item.quantity}</p>
          <p className="unitaryp-cart">Precio u.: ${item.price}</p>
          <p className="totalp-cart">Precio total: ${item.quantity * item.price}</p>
          <button className="btn-cart" onClick={() => removeItem(item.id)}>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
