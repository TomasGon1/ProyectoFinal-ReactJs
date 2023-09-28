import React from "react";
import Item from "../Item/Item";
import "./ItemList.css"

const ItemList = ({ item }) => {
  return (
    <div className='container-div'>
      <div className="grid-div">
      {
      item.map(item=>
      
      <div className='card-product'
       key={item.id}>
       <Item item={item}/> 
       </div>
      )   
      }
      </div>
   </div>
  );
};

export default ItemList;
