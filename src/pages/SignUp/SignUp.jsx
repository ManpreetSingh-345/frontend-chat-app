import React from "react";
import Navbar from "@components/Navbar";
import signUpBgVideo from "@assets/signUpBackground.mp4";
import Form from "./components/Form";

const SignUp = () => {
  return (
    <div className="sign-up-page h-[100vh] min-h-[700px] w-[100vw] min-w-[300px] bg-[#D9D9D9]">
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

export default SignUp;
