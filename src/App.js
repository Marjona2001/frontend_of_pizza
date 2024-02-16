import React from "react";
import { Header } from "./components";
import { Home, Cart } from "./Pages";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" Component={Home} exact />
          <Route path="/cart" Component={Cart} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App;
