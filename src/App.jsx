import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Welcome from "./Welcome";
import Websites from "./Websites";

function App() {
  return (
    <div className="container">
      <Welcome />
      <nav>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/websites">Websites</Link>
        </p>
      </nav>
      <Routes>
        <Route path="/" element={<Websites />} />
        <Route path="/websites" element={<Websites />} />
      </Routes>
    </div>
  );
}

export default App;
