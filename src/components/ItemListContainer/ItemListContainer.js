import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getFirestore, collection, getDocs, where, query} from 'firebase/firestore';
import ItemList from "../ItemList/ItemList";
import { PacmanLoader } from "react-spinners";
import "./ItemListContainer.css"

const ItemListContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(()=>{
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'products');
    if(id){
      const queryFilter = query(queryCollection, where('categoryid', '==', id));
      getDocs(queryFilter).then((res)=> setItem(res.docs.map((p)=>({id: p.id, ...p.data()}))));
    }else{
     getDocs(queryCollection).then((res)=> setItem(res.docs.map((p)=>({id: p.id, ...p.data()}))));
    }
  }, [id])

  
  if(item.length === 0){
    return (
      <div className="loader-style">
        <PacmanLoader color="black" size={80} speedMultiplier={2} />
      </div>
    );
  }
  
  return (
    <div className="div-container">
      <ItemList item={item} /> 
    </div>
  );
};

export default ItemListContainer;
