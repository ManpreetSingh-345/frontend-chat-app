import React from "react";
import axios from "axios";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
