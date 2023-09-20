import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id} className="text-decoration-none">
      <div className="container">
        <div className="card-border border-0">
          <img src={item.image} className="card-img-top" alt={item.name} />
          <div className="card-body text-center">
            <p className="card-text p-style">{item.name}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
