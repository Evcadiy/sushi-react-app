import React from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header/Header";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  </>
);

export default App;
