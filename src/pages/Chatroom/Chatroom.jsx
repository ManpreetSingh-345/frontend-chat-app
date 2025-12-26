import { useNavigate } from "react-router";
import handleToken from "@src/utils/handleToken";
import { useAuth } from "@contexts/AuthContext";
import { useEffect, useState } from "react";

const Chatroom = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  const persist = handleToken(authUser, setAuthUser, setIsLoggedIn);

  useEffect(() => {
    if (!authUser) {
      persist();
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="chatpage">
      <div className="">
        Current User: {authUser ? authUser.name : "No valid user"}
      </div>
      <div>You are logged in</div>
      {authUser && (
        <button onClick={handleToken(authUser, setAuthUser, setIsLoggedIn)}>
          Verify user
        </button>
      )}
    </div>
  );
};

export default Chatroom;
