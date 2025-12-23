import { useNavigate } from "react-router";
import handleToken from "@src/utils/handleToken";
import { useAuth } from "@contexts/AuthContext";

const Chatroom = () => {
  const navigate = useNavigate();
  const { authUser, setAuthUser, isLoggedIn } = useAuth();

  const redirect = () => {
    navigate("/login");
  };

  return (
    <div className="chatpage">
      <div className="">
        Current User: {authUser ? authUser.name : "No valid user"}
      </div>
      {isLoggedIn ? (
        <div>You are logged in</div>
      ) : (
        <div>
          You are not{" "}
          <span onClick={redirect} className="underline cursor-pointer">
            logged in
          </span>
        </div>
      )}
      {authUser && (
        <button onClick={handleToken(authUser, setAuthUser)}>
          Verify user
        </button>
      )}
    </div>
  );
};

export default Chatroom;
