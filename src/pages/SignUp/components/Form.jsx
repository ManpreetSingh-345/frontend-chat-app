import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const navigate = useNavigate();
  const [inputFields, setInputFields] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputFields.password === inputFields.repeatPassword) {
      setInputFields(inputFields);
      axios
        .post("http://localhost:8080/users/new", inputFields)
        .then(() =>
          navigate("/login", {
            state: { message: "Signed up successfully! Log in below." },
          })
        )
        .catch((error) => res.json(console.log(error)));
    } else {
      setErrorMessage("Passwords don't match. Please try again.");
    }
  };
  return (
    <div className="h-full flex justify-center items-center opacity-95 flex-col gap-10">
      {errorMessage && (
        <div className="text-center text-white md:text-lg text-[3vw] border p-5">
          {errorMessage}
        </div>
      )}
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
  );
};

export default Form;
