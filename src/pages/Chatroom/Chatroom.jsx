import { useNavigate } from "react-router";
import { useAuth } from "@contexts/AuthContext";
import { useLogout } from "@src/hooks/useLogout";
import { useEffect } from "react";
import { useRefreshToken } from "@src/hooks/useRefreshToken";

const Chatroom = () => {
  const navigate = useNavigate();
  const refresh = useRefreshToken();
  const logout = useLogout();
  const { authUser, isLoggedIn } = useAuth();

  useEffect(() => {
    if (!authUser) {
      refresh();
    }
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="chatpage">
      <div className="">
        Current User: {authUser ? authUser.name : "No valid user"}
      </div>
      <div>You are logged in</div>
      <br></br>
      <button onClick={logout}>Log out</button>
    </div>
  );
};

export default Chatroom;
