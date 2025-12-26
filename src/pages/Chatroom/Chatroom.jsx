import { useNavigate } from "react-router";
import handleToken from "@src/utils/handleToken";
import { useAuth } from "@contexts/AuthContext";

const Chatroom = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();

  if (!authUser) {
    const persist = handleToken(authUser, setAuthUser, setIsLoggedIn);
    persist();
  }

  const redirect = () => {
    navigate("/login");
  };

  return (
    <div className="chatpage">
      <div className="">
        Current User: {authUser ? authUser.name : "No valid user"}
      </div>
      {isLoggedIn ? <div>You are logged in</div> : navigate("/login")}
      {authUser && (
        <button onClick={handleToken(authUser, setAuthUser, setIsLoggedIn)}>
          Verify user
        </button>
      )}
    </div>
  );
};

export default Chatroom;
