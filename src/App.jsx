import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router";
import Chatroom from "./pages/Chatroom/Chatroom";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatroom" element={<Chatroom />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
