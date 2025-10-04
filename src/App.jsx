import React from "react";
import axios from "axios";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Chatroom from "./pages/Chatroom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatroom" element={<Chatroom />} />
      </Routes>
    </div>
  );
};

export default App;
