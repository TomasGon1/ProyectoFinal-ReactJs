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
      <h2 className='tittle-style'>No hay productos en el carrito 😞😞</h2>
      <Link to="/" className='link-style'><button className='btn-style'>Ver productos!</button></Link>
      </div>
    );
  }

  return (
    <div className='div-container'>
     {cart.map((item)=>(
      <ItemCart key={item.id} item={item}/>
     ))}
     <div className='total-price-container'>
      <p className='total-price'>Total: ${total()}</p>
    </div>

     <Link to="/checkout" className='link-style'>
      {' '}
      <button className='btn-end'>Finalizar compra</button>
     </Link>
    </div>
  )
  
  
}

export default Cart