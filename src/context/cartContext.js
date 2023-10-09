import React, { useState, useContext } from "react";
import Swal from "sweetalert2";


const CartContext = React.createContext("");

export const useCartContext = () => useContext(CartContext);

const CartAux = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (insideCart(item.id)) {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: product.quantity + quantity }
            : product;
        })
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const total = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const allProducts = () =>
    cart.reduce((accum, actualProduct) => accum + actualProduct.quantity, 0);

  const clearCart = () => setCart([]);

  const insideCart = (id) => 
    cart.find((product) => product.i === id) ? true : false;
  

  const removeItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
    Swal.fire({
      icon: "success",
      text: "Producto eliminado con exito",
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  }
  

  return (
    <CartContext.Provider
      value={{
        clearCart,
        insideCart,
        removeItem,
        addItem,
        total,
        allProducts,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartAux;
