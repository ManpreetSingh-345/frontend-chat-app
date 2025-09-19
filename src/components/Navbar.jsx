import React from "react";

const Navbar = () => {
  return (
    <div className="h-3/4">
      <div className=" bg-black bg-[url(https://images.unsplash.com/photo-1463947628408-f8581a2f4aca?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center brightness-75 h-3/4 absolute left-0 right-0 border-2"></div>
      <div className="flex place-content-between p-5 opacity-95">
        <h1 className="font-[inter] font-bold text-3xl text-white">Chatlify</h1>
        <div className="flex gap-5">
          <button className="bg-[#D9D9D9] hover:cursor-pointer px-5 py-2 rounded-xl transition duration-300 ease-in-out hover:opacity-50">
            Sign up
          </button>
          <button className="bg-[#D9D9D9] hover:cursor-pointer px-5 py-2 rounded-xl transition duration-300 ease-in-out hover:opacity-50">
            Log in
          </button>
        </div>
      </div>
      <div className="h-100 flex justify-center items-center animate-fade-in-scale opacity-95">
        <h1 className="text-5xl text-white break-normal">
          Communication that empowers
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
