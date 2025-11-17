import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<div>Login Page</div>} />
      </Routes>
      <Header />
    </BrowserRouter>
  );
}

export default App;
