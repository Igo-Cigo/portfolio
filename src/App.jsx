import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

import Welcome from "./Welcome";
import Websites from "./Websites";
import Home from "./Home";
import Contact from "./Contact";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Welcome />
      <hr/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <img className="pt-3 center" src="/assets/images/moon.jpeg" alt="moon"></img>
    </div>
  );
}

export default App;
