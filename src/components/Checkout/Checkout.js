import { useState } from "react";
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

export const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [ordenId, setOrdenId] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const formulario = (e) => {
    e.preventDefault();
    if (!nombre || !apellido || !telefono || !email || !emailConfirm) {
      setError("Por favor complete todos los campos");
      return;
    }

    if (email !== emailConfirm) {
      setError("Los emails no coinciden");
      return;
    }

    const orden = {
      items: cart.map((product) => ({
        id: product.id,
        name: product.name,
        price: product.price,
        stock: product.stock,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.new(
      orden.items.map(async (productOrder) => {
        const db = getFirestore();
        const productRef = doc(db, "products", productOrder.id);

        const productDoc = await getDoc(productRef);
        const stockActual = productDoc.data().stock;

        await updateDoc(productRef, {
          stock: stockActual - productOrder.quantity,
        });
      })
    )
      .then(() => {
        const db = getFirestore();
        addDoc(collection(db, "orders"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            /* removeproduct() */
          })
          .catch((error) => {
            console.log("Error en la creacion de la orden", error);
            setError("Error en la orden");
          });
      })
      .catch((error) => {
        console.log("No se puede actualizar el stock", error);
        setError("No se actualizo el stock");
      });


  };

  return (
    <div>
      <h2>Completa los datos</h2>
      <form onSubmit={formulario}>
        {cart.map((product) => {
          <div key={product.item.id}>
            <p>
              {""}
              {product.item.name} x {product.stock}
            </p>
            <p>$ {product.item.price}</p>
          </div>;
        })}

        <div>
          <label className="lab-check">Nombre:</label>
          <imput
            className="input-check"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></imput>
        </div>
        <div>
          <label className="lab-check">Apellido:</label>
          <imput
            className="input-check"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          ></imput>
        </div>
        <div>
          <label className="lab-check">Nro de Telefono:</label>
          <imput
            className="input-check"
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          ></imput>
        </div>
        <div>
          <label className="lab-check">Email:</label>
          <imput
            className="input-check"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></imput>
        </div>
        <div>
          <label className="lab-check">Confirmas email:</label>
          <imput
            className="input-check"
            type="text"
            value={emailConfirm}
            onChange={(e) => setEmailConfirm(e.target.value)}
          ></imput>
        </div>

        {error && <p>{error}</p>}
        {ordenId && (
          <p>
            Gracias por tu compra!! <br /> Tu numero de compra es: <br />
            {""} {ordenId} {""}
          </p>
        )}

        <div>
          <button>Finalizar compra</button>
        </div>
      </form>
    </div>
  );
};
