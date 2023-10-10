import { useState } from "react";
import { useCartContext } from "../../context/cartContext";
import {
  getFirestore,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import "./Checkout.css";

export const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { cart, clearCart, total } = useCartContext();

  const formulario = (event) => {
    event.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !confirmEmail) {
      setError("Por favor complete los campos");
      return;
    }

    if (email !== confirmEmail) {
      setError("Los email no coinciden");
      return;
    }

    const totalPrice = total();
    const orden = {
      items: cart.map((item) => ({
        id: item.id,
        nombre: item.name,
        cantidad: item.quantity,
      })),
      total: totalPrice,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all(
      orden.items.map(async (itemOrden) => {
        const db = getFirestore();
        const itemRef = doc(db, "products", itemOrden.id);

        const itemDoc = await getDoc(itemRef);
        const stockActual = itemDoc.data().stock;

        await updateDoc(itemRef, {
          stock: stockActual - itemOrden.quantity,
        });
      })
    )
      .then(() => {
        const db = getFirestore();
        addDoc(collection(db, "orders"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            clearCart();
          })
          .catch((error) => {
            console.log("Error en crear la orden", error);
            setError("Error en la orden");
          });
      })
      .catch((error) => {
        console.log("No se pudo actualizar el stock", error);
        setError("No se actualizo el error");
      });

    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
    setConfirmEmail("");
  };

  return (
    <div className="div-container">
      <div className="tittle-container">
        <h2 className="tittle-form">
          Rellene el formulario para confirmar la compra
        </h2>
      </div>

      <form onSubmit={formulario}>
        {cart.map((item) => (
          <div key={item.id}>
            <p>
              {" "}
              {item.nombre} {item.cantidad}
            </p>
            <p>{item.precio}</p>
          </div>
        ))}

        <div className="form-container">
          <div className="input-box">
            <input
              className="input-style"
              type="text"
              placeholder="Ingrese su nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              className="input-style"
              type="text"
              placeholder="Ingrese su apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              className="input-style"
              type="number"
              placeholder="Ingrese su telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              className="input-style"
              type="text"
              placeholder="Ingrese su email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-box">
            <input
              className="input-style"
              type="text"
              placeholder="Confirme su email"
              value={confirmEmail}
              onChange={(e) => setConfirmEmail(e.target.value)}
            />
          </div>

          {error && (
            <div className="error-container">
              <p className="error-style">*{error}</p>
            </div>
          )}

          {ordenId && (
            <div className="end-buy-container">
              <p className="end-buy-style">
                ¡Gracias por tu compra! <br /> Este es tu numero de seguimiento:{" "}
                <br /> {ordenId}{" "}
              </p>
            </div>
          )}
        </div>
        <div className="btn-container">
          <button className="submit-btn" type="submit">
            Finalizar compra
          </button>
        </div>
      </form>
    </div>
  );
};
