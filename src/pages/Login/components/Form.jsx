import React from "react";
import { useAuth } from "@contexts/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

const Form = () => {
  const location = useLocation();
  const [message, setMessage] = useState("");
  const { setAuthUser } = useAuth();
  const navigate = useNavigate();

  const [inputFields, setInputFields] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    setInputFields(inputFields);

    axios
      .post("http://localhost:8080/users/query", inputFields) // Replace with user auth endpoint
      .then((res) => {
        try {
          setAuthUser(res.data.user.username);
          navigate("/chatroom");
        } catch (error) {
          setMessage("Username or password does not match. Please try again.");
        }
      })
      .catch(() =>
        setMessage("User does not exist. Consider creating an account.")
      );
  }
  return (
    <>
      <div className="h-full flex justify-center items-center opacity-95 flex-col gap-10">
        {message && (
          <div className="text-center text-white md:text-lg text-[3vw] border p-5">
            {message}
          </div>
        )}
        <h1 className="text-center text-white md:text-3xl text-[5vw]">
          Log in!
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

            <input
              type="submit"
              value="Submit"
              className="w-25 self-center bg-transparent border border-white mt-5 rounded-xl transition hover:bg-white hover:text-black hover:cursor-pointer hover:transition"
            />
          </form>
        </div>
        <div className="text-white">
          <h3>
            Don't have an account yet?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="hover:cursor-pointer underline underline-offset-4"
            >
              Sign Up
            </span>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Form;
