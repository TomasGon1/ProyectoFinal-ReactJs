import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailConteiner from "../src/components/ItemDetailContainer/ItemDetailContainer.js";
import CartWidget from "./components/CartWidget/CartWidget";
import Error404 from "./components/Error404";
import { Checkout } from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailConteiner />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
