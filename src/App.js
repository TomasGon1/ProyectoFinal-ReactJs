import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailConteiner from "../src/components/ItemDetailContainer/ItemDetailContainer.js";
import Error404 from "./components/Error404";
import { Checkout } from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";
import CartAux from "./context/cartContext"
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartAux>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailConteiner />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
          <Footer />
        </CartAux>
      </BrowserRouter>
    </div>
  );
}

export default App;
