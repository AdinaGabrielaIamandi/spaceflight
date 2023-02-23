import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavComp } from "./components/NavComp";
import { HomeComp } from "./components/HomeComp";
import { FooterComp } from "./components/FooterComp";
import { ArtDetails } from "./components/ArtDetails";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <NavComp />
        <Routes>
          <Route path="/" element={<HomeComp />} />
          <Route path="/art-details/:artId" element={<ArtDetails />} />
        </Routes>
        <FooterComp />
      </BrowserRouter>
    </Container>
  );
}

export default App;
