import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@contexts/AuthContext";
import axios from "axios";

const Chatroom = () => {
  const navigate = useNavigate();
  const { authUser, isLoggedIn } = useAuth();

  const verifyUser = () => {
    axios
      .get("http://localhost:8080/users/verify", {
        headers: { Authorization: `Bearer ${authUser.accessToken}` },
      })
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.error(err);
        console.log("User not verified");
      });
  };

  return (
    <div className="chatpage">
      <div className="">Current User: {authUser.name}</div>
      {isLoggedIn ? (
        <div>You are logged in</div>
      ) : (
        <div>You are not logged in</div>
      )}
      <button onClick={verifyUser}>Verify user</button>
    </div>
  );
};

export default Chatroom;
