import { useAuth } from "@contexts/AuthContext";
import { useLogout } from "@src/hooks/useLogout";

const Chatroom = () => {
  const { authUser } = useAuth();
  const logout = useLogout();

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
