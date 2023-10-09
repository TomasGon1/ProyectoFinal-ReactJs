import React from 'react'
import { useCartContext } from '../../context/cartContext'

const ItemCart = ({item}) => {
  
  const {removeItem} = useCartContext();
  
  return (
    <div className='item-cart'>
      <img src={item.image} alt={item.name}/>
      <div>
        <h2>Nombre: {item.name}</h2>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio u.: ${item.price}</p>
        <p>Precio total: ${item.quantity * item.price}</p>
        <button onClick={()=> removeItem(item.id)}>Eliminar</button>
      </div>
    </div>
  )
}

export default ItemCart