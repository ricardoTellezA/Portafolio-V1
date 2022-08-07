import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Proyectos from "../pages/proyectos";
import Skills from "../pages/Skills";

const Navigation = () => {
  return (
    <div>
      <Router>
        
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/skills" element={<Skills />} />
          </Routes>
       
      </Router>
    </div>
  );
};

export default Navigation;
