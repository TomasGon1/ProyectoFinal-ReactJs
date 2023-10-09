import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'
import ItemCart from '../ItemCart/ItemCart'

const Cart = () => {
  
  const {cart, total} = useCartContext();

  if(cart.length === 0){
    return (
      <>
      <h2>No hay productos en el carrito 😞😞</h2>
      <Link to="/">Ver productos!</Link>
      </>
    );
  }

  return (
    <>
     {cart.map((item)=>(
      <ItemCart key={item.id} item={item}/>
     ))}
     <p>Total: ${total()}</p>

     <Link to="/checkout">
      {' '}
      <button>Finalizar compra</button>
     </Link>
    </>
  )
  
  
}

export default Cart