import Home from "./Home";
import React from "react";
import { Route, Routes} from "react-router-dom";
//import { filterProps } from "framer-motion";
import Cuisine from "./Cuisine";

function Pages() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cuisine/:type" element={<Cuisine />} />
      </Routes>
  );
}

export default Pages;
