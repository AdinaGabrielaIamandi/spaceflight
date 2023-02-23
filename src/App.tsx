import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavComp } from "./components/NavComp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavComp />
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
