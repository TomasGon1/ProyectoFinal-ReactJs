import React from "react";
import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({stockItems}) => {
  const [counter, setCounter] = useState(1);
  const [stock, setStock] = useState(stockItems);

  const incrementarStock = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const decrementarStock = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="container" id="itemcount">
            <div className="div-s mb-2 mt-1">
                <div>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn-style w-style" onClick={decrementarStock}>-</button>
                        <b type="button" className="b-style w-style">{counter}</b>
                        <button type="button" className="btn-style w-style" onClick={incrementarStock}>+</button>
                     </div>
                </div>
            </div>
         <div className="div-s">
           <div>
            <button type="button" className="btn-style w-style" >Agregar al carrito</button>    
           </div>
          </div>
      </div>  
  );
};

export default ItemCount;
