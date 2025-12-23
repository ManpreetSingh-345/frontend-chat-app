import Navbar from "@components/Navbar";
import signUpBgVideo from "@assets/signUpBackground.mp4";
import Form from "./components/Form";
import { useLocation } from "react-router";

const Login = () => {
  const location = useLocation();
  const message = location.state?.message;
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
        <Form message={message} />
      </div>
    </div>
  );
};

export default Login;
