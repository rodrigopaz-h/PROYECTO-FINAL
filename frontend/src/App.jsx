import "./App.css";
import "./index.css";
import React from "react";
import Navbar from "./components/layouts/Navbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Carousel from "./components/layouts/Sliderbar";
import UserRegistration from "./views/userViews/UserRegistration";
import UserLogin from "./views/userViews/UserLogin";
import Hero from "./components/layouts/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/layouts/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
