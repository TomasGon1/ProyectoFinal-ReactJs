import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, doc, getDoc} from 'firebase/firestore'
import ItemDetail from "../ItemDetaIl/ItemDetail";
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const [loading, setloading] = useState(true);

  const dataProps = {item, loading}

  useEffect(() => {
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'products', id);
    
    getDoc(queryDoc)
    .then((res) => {
      setItem({id: res.id, ...res.data()});
      setloading(false);
    })
    .catch((error) => {
      console.error("Error al obtener el producto:", error);
      setloading(false);
    });
  }, [id]);
  
  return (
    <div className="div-container">
      <ItemDetail {...dataProps} />
    </div>
  );
};

export default ItemDetailContainer;
