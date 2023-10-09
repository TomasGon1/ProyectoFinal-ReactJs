import React from "react";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(parseInt(initial));
 
  useEffect(()=>{
    setCounter(parseInt(initial))
  }, [initial])

  const agregarProd = () => {
    counter < stock
      ? setCounter(counter + 1)
      : Swal.fire({
          icon: "error",
          text: "Stock agotado, lo sentimos.",
          toast: true,
          position: "bottom-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
  };

  const quitarProd = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="count-container">
      <div className="count-section">
        <button type="button" className="count-btn" disabled={counter <= 1} onClick={quitarProd}>
          -
        </button>
        <h3 className="count-value">{counter}</h3>
        <button type="button" className="count-btn" onClick={agregarProd}>
          +
        </button>
      </div>

      <div className="count-section">
        <button type="button" className="add-btn" disabled={stock <=0} onClick={()=> onAdd(counter)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
