import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  
  const [goCart, setGoCart] = useState(false);
  const {addItem} = useCartContext();
  const onAdd = (quantity) =>{
    setGoCart(true);
    addItem(item, quantity);
  };
  
  return (
    <div className="item-detail-container">
      <div className="item-detail">
        <div className="img-detail">
          <img src={item.image} alt={item.name} />
        </div>
        <div className="info-detail">
          <h2 className="prod-tittle">{item.name}</h2>
          <p className="prod-description">{item.description}</p>
          <p className="prod-price">Precio: ${item.price}</p>
          <div className="prod-count">
           {goCart ? <Link to={'/cart'}><button className="end-btn">Finalizar Compra!</button></Link> : <ItemCount stock={10} initial={1} onAdd={onAdd} />} 
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
