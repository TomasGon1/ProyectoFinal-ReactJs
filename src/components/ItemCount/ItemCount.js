import React from "react";
import { useState, useEffect } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [counter, setCounter] = useState(parseInt(initial));
 
  useEffect(()=>{
    setCounter(parseInt(initial))
  }, [initial])

  const agregarProd = () => {
    setCounter(counter + 1)   
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
        <button type="button" className="count-btn" disabled={counter >= stock} onClick={agregarProd}>
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
