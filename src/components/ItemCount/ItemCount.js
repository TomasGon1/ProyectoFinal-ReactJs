import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
import "./ItemCount.css";

const ItemCount = ({ stockItems }) => {
  const [counter, setCounter] = useState(1);
  const [stock, setStock] = useState(stockItems);

  const agregarProd = () => {
    counter < stock
      ? setCounter(counter + 1)
      : Swal.fire({
          icon: "error",
          text: "Lo sentimos, no hay suficiente stock.",
          toast: true,
          position: "bottom-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
  };

  const quitarProd = () => {
    counter > 1 && setCounter(counter - 1);
  };

  return (
    <div className="count-container">
      <div className="count-section">
        <button type="button" className="count-btn" onClick={quitarProd}>
          -
        </button>
        <h3 className="count-value">{counter}</h3>
        <button type="button" className="count-btn" onClick={agregarProd}>
          +
        </button>
      </div>

      <div className="count-section">
        <button type="button" className="add-btn">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
