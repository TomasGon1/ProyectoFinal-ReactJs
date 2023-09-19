import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import ItemDetailConteiner from "../src/components/ItemDetailContainer/ItemDetailContainer.js"
import CartWidget from "./components/CartWidget/CartWidget";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailConteiner />} />
          <Route parth="/cart" element={<CartWidget/>}/>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
