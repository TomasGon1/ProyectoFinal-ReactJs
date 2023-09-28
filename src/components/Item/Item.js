import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({ item }) => {
  return (
    
      <div className="container">
        <div className="card-border border-0">
          <img src={item.image} className="card-img-top" alt={item.name} />
          <div className="card-body text-center">
            <p className="card-text p-style">{item.name}</p>
          <Link to={"/item/" + item.id} className="text-decoration-none">
          <button className="btn-style">Ver Producto</button>
          </Link>
          </div>
        </div>
      </div>
    
  );
};

export default Item;
