import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Productos from "../Productos.json";
import ItemDetail from "../ItemDetaIl/ItemDetail";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(Productos.find((item) => item.id === parseInt(id)));
      }, 1000);
    });
    promesa.then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div className="div-container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
