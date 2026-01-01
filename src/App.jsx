import React from "react";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router";
import Chatroom from "./pages/Chatroom/Chatroom";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import { AuthProvider } from "./contexts/AuthContext";
import PersistLogin from "./utils/PersistLogin";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {/* Wrapper Component for authenticating user (PersistLogin) */}
          <Route element={<PersistLogin />}>
            <Route path="/chatroom" element={<Chatroom />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
