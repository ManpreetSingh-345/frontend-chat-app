import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@contexts/AuthContext";

const Chatroom = () => {
  const navigate = useNavigate();
  const { authUser, isLoggedIn } = useAuth();

  return (
    <div className="chatpage">
      <div className="">Current User: {authUser}</div>
      {isLoggedIn ? (
        <div>You are logged in</div>
      ) : (
        <div>You are not logged in</div>
      )}
    </div>
  );
};

export default Chatroom;
