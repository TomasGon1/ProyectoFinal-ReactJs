import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({item}) => {
  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4'>
      <img src={item.image} className='img-fluid' alt={item.name}/>
      <h2 className='style'>{item.name}</h2>
      <p className='style'>{item.description}</p>
      <p className='style'>${item.price}</p>
      <p className='style'>{item.stock}</p>
      </div>
      <div>
        <ItemCount stockItems={10}/>
      </div>
    </div>
  )
}

export default ItemDetail