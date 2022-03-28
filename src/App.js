import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import Launch from './components/Launch';
import Notfound from './components/Notfound';
import Element from './components/Element';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

import Shoes from './items.json';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const [item] = useState(Shoes)
  const [cart, setcart] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home item={item} cart={cart} setcart={setcart} />} />
          <Route path="launch" element={<Launch item={item} />} >
            <Route path=":slug" element={<Element item={item} />} />
          </Route>
          <Route path=":slug" element={<Element item={item} />} />
          <Route path="cart" element={<Cart cart={cart} setcart={setcart} />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>,
    </div>
  );
}

export default App;
