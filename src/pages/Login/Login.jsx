import Navbar from "@components/Navbar";
import signUpBgVideo from "@assets/signUpBackground.mp4";
import Form from "./components/Form";
import { useNavigate } from "react-router";
import { useAuth } from "@contexts/AuthContext";
import { useRefreshToken } from "@src/hooks/useRefreshToken";
import { useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { authUser, isLoggedIn } = useAuth();
  const refresh = useRefreshToken();

  // If the user loads into the login page having already been logged in,
  // and their access token is expired, call refresh
  useEffect(() => {
    const callRefresh = async () => {
      if (!authUser) {
        await refresh();
      }
    };
    callRefresh();
  }, []);

  // If the user is logged in, and is trying to access the login page,
  // redirect them to the chatroom page
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/chatroom");
    }
  }, [isLoggedIn]);

  // If the user is logged in, return null (instead of returning the login page itself)
  if (isLoggedIn) {
    return null;
  }

  return (
    <div className="login-page h-[100vh] min-h-[700px] w-[100vw] min-w-[300px] bg-[#D9D9D9]">
      <Navbar />
      <div className="h-full w-full relative">
        <video
          className="object-cover brightness-75 h-full w-full absolute left-0 right-0 border-2"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={signUpBgVideo} type="video/mp4" />
        </video>
        <Form />
      </div>
    </div>
  );
};

export default Login;
