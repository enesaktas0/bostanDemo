import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import AboutUs from "./components/AboutUs";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

import React from "react";

export const menuData = [
  {
    name: "Ekler",
    image: "ekler.jpg",
    desription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, reiciendis.",
    price: 200,
  },
  {
    name: "Ekler",
    image: "ekler.jpg",
    desription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, reiciendis.",
    price: 200,
  },
  {
    name: "Ekler",
    image: "ekler.jpg",
    desription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, reiciendis.",
    price: 200,
  },
  {
    name: "Ekler",
    image: "ekler.jpg",
    desription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, reiciendis.",
    price: 200,
  },
  {
    name: "Ekler",
    image: "ekler.jpg",
    desription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, reiciendis.",
    price: 200,
  },
  {
    name: "Ekler",
    image: "ekler.jpg",
    desription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At, reiciendis.",
    price: 200,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/bostanDemo" element={<HomePage />}></Route>
          <Route
            path="/bostanDemo/menu"
            element={<Menu menuData={menuData} />}
          ></Route>
          <Route path="/bostanDemo/aboutUs" element={<AboutUs />}></Route>
          <Route path="/bostanDemo/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
