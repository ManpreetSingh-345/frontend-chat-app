import React from "react";

const Navbar = () => {
  return (
    <div className="flex place-content-between p-5 fixed z-10 left-0 right-0">
      <h1 className="font-[inter] font-bold md:text-3xl text-[5vw] text-white">
        Chatlify
      </h1>
      <div className="flex gap-5 md:text-lg text-[2vw]">
        <button className="bg-[#D9D9D9] hover:cursor-pointer px-5 py-2 rounded-xl transition duration-300 ease-in-out hover:opacity-50">
          Sign up
        </button>
        <button className="bg-[#D9D9D9] hover:cursor-pointer px-5 py-2 rounded-xl transition duration-300 ease-in-out hover:opacity-50">
          Log in
        </button>
      </div>
    </div>
  );
};

export default Navbar;
