import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"

const ItemDetail = ({item}) => {
  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4 mt-4 color'>
      <img src={item.image} className='img-fluid mt-2' alt={item.name}/>
      <h2 className='style prod-tittle'>{item.name}</h2>
      <p className='style'>{item.description}</p>
      <p className='style price-s text-center mt-3'>Precio: ${item.price}</p>
      <p className='style mt-2'>Articulos disponibles: {item.stock}</p>
      </div>
      <div className='mt-2'>
        <ItemCount stockItems={10}/>
      </div>
    </div>
  )
}

export default ItemDetail