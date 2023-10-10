import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ item }) => {
  return (
    <div className="product-card">
     <img src={item.image} className="card-img" alt={item.name} />
      <div className="card-info">
        <p className="card-name">{item.name}</p>
        <p className="card-price">${item.price}</p>
        <Link to={"/item/" + item.id} className="card-link">
          <button className="card-btn">Ver Producto</button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
