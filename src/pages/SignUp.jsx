import React from "react";
import Navbar from "../components/Navbar";
import signUpBgVideo from "../assets/signUpBackground.mp4";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputFields.password === inputFields.repeatPassword) {
      setInputFields(inputFields);
      axios
        .post("http://localhost:8080/users/new", inputFields)
        .then((res) =>
          navigate("/login", {
            state: { message: "Signed up successfully! Log in below." },
          })
        )
        .catch((error) => res.json(console.log(error)));
    } else {
      console.log("Passwords don't match");
    }
  };
  return (
    <div className="sign-up-page h-[100vh] min-h-[700px] w-[100vw] min-w-[300px] bg-[#D9D9D9]">
      <Navbar login={false} />
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
        <div className="h-full flex justify-center items-center opacity-95 flex-col gap-10">
          <h1 className="text-center text-white md:text-3xl text-[5vw]">
            Sign Up Now!
          </h1>
          <div className="bg-transparent border border-white p-10 rounded-xl flex flex-col md:text-[15px] text-[2.5vw]">
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="flex flex-col p-5 gap-3 text-white"
            >
              <label htmlFor="username">Username: </label>
              <input
                onChange={(e) => {
                  inputFields.username = e.target.value;
                }}
                type="text"
                name="username"
                id="username"
                className="border"
                required
              />

              <label htmlFor="email">Email: </label>
              <input
                onChange={(e) => {
                  inputFields.email = e.target.value;
                }}
                type="email"
                name="email"
                id="email"
                className="border"
                required
              />

              <label htmlFor="password">Password: </label>
              <input
                onChange={(e) => {
                  inputFields.password = e.target.value;
                }}
                type="password"
                name="password"
                id="password"
                className="border"
                required
              />

              <label htmlFor="repeat-password">Repeat Password: </label>
              <input
                onChange={(e) => {
                  inputFields.repeatPassword = e.target.value;
                }}
                type="password"
                name="repeat-password"
                id="repeat-password"
                className="border"
                required
              />

              <input
                type="submit"
                value="Submit"
                className="w-25 self-center bg-transparent border border-white mt-5 rounded-xl transition hover:bg-white hover:text-black hover:cursor-pointer hover:transition"
              />
            </form>
            <div className="text-white">
              <h3>
                Already have an account?{" "}
                <span
                  onClick={() => navigate("/login")}
                  className="hover:cursor-pointer underline underline-offset-4"
                >
                  Log in
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
