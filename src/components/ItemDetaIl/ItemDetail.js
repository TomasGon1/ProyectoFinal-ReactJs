import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
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
            <ItemCount stockItems={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
