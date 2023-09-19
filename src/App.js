import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KeysSteam from "./components/ItemListContainer/KeysSteam";
import Componentes from "./components/ItemListContainer/Componentes";
import Perifericos from "./components/ItemListContainer/Perifericos";
import CartWidget from "./components/CartWidget/CartWidget";
import Error404 from "./components/Error404";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer greetings="Este es el Home donde van todos los productos" />
            }
          />
          <Route path="/keysteam" element={<KeysSteam />} />
          <Route path="/componentes" element={<Componentes />} />
          <Route path="/perifericos" element={<Perifericos />} />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
