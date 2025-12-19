import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

const Chatroom = () => {
  const navigate = useNavigate();
  const { authUser } = useAuth();

  return (
    <div className="chatpage">
      <div className="">Current User: {authUser}</div>
    </div>
  );
};

export default Chatroom;
