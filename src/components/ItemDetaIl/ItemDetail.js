import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/cartContext";
import Swal from "sweetalert2";
import { PacmanLoader } from "react-spinners";
import "./ItemDetail.css";

const ItemDetail = ({ item, loading }) => {
  const [goCart, setGoCart] = useState(false);
  const { addItem } = useCartContext();
  
  const onAdd = (quantity) => {
    setGoCart(true);
    addItem(item, quantity);
    Swal.fire({
      icon: "success",
      text: "Producto agregado al carrito!",
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      iconColor: "#30a700",
    });
  };

  return (
    <div className="item-detail-container">
      {loading ? (
        <div className="loader-style">
        <PacmanLoader color="black" size={80} speedMultiplier={2} />
      </div>
      ) : (
         <div className="item-detail">
        <div className="img-detail">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="info-detail">
          <h2 className="prod-tittle">{item.name}</h2>
          <p className="prod-description">{item.description}</p>
          <p className="prod-price">Precio: ${item.price}</p>
          <div className="prod-count">
            {goCart ? (
              <Link to={"/cart"}>
                <button className="end-btn">Finalizar Compra!</button>
              </Link>
            ) : (
              <ItemCount stock={10} initial={1} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
      )};
    </div>
  );
};

export default ItemDetail;
