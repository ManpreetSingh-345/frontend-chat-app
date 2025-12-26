import Navbar from "@components/Navbar";
import signUpBgVideo from "@assets/signUpBackground.mp4";
import Form from "./components/Form";
import { useLocation, useNavigate } from "react-router";
import { useAuth } from "@contexts/AuthContext";
import { useRefreshToken } from "@src/hooks/useRefreshToken";
import { useEffect } from "react";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const message = location.state?.message;
  const { authUser, isLoggedIn } = useAuth();
  const refresh = useRefreshToken();

  useEffect(() => {
    const callRefresh = async () => {
      if (!authUser) {
        await refresh();
      }
    };
    callRefresh();
  }, [authUser]);

  return isLoggedIn ? (
    navigate("/chatroom")
  ) : (
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
        <Form message={message} />
      </div>
    </div>
  );
};

export default Login;
