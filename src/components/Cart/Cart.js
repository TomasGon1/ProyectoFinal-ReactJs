import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import ItemCart from '../ItemCart/ItemCart'
import "./Cart.css"

const Cart = () => {
  
  const {cart, total} = useCartContext();

  if(cart.length === 0){
    return (
      <div className='div-container'>
      <h2>No hay productos en el carrito 😞😞</h2>
      <Link to="/">Ver productos!</Link>
      </div>
    );
  }

  return (
    <div className='div-container'>
     {cart.map((item)=>(
      <ItemCart key={item.id} item={item}/>
     ))}
     <p>Total: ${total()}</p>

     <Link to="/checkout">
      {' '}
      <button>Finalizar compra</button>
     </Link>
    </div>
  )
  
  
}

export default Cart