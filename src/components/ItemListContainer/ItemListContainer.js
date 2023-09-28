import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Productos from "../Productos.json";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const data = await new Promise((resolve)=>{
          setTimeout(()=>{
            resolve(id ? Productos.filter(item => item.category === id) : Productos)
          }, 1500);
        });
        setItem(data);
      }catch(error){
        console.log('Error', error);
      }
    }
fetchData();
  }, [id])

  return (
    <div className="div-container">
      
      <ItemList item={item} />
      
    </div>
  );
};

export default ItemListContainer;
