import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "@contexts/AuthContext";
import axios from "axios";

const Chatroom = () => {
  const navigate = useNavigate();
  const { authUser, isLoggedIn, setAuthUser } = useAuth();

  const name = authUser.name;
  const accessToken = authUser.accessToken;

  const refreshToken = () => {
    axios
      .post(
        "http://localhost:8080/auth/refresh",
        { name },
        { withCredentials: true }
      )
      .then((res) => {
        const newAccessToken = res.data.newAccessToken;
        setAuthUser({ accessToken: newAccessToken });
        console.log(authUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const verifyUser = () => {
    axios
      .get("http://localhost:8080/auth/verify", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res.data.message);
      })
      .catch((err) => {
        console.error(err);
        console.log("User not verified");
        console.log("Attempting to refresh token");
        refreshToken();
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
