import React from "react";

const Home = () => {
  return (
    <div>
      <div className="h-3/4">
        <div className=" bg-black bg-[url(https://i.pinimg.com/originals/37/1e/7c/371e7c1ccf6e664f18ec1b132de04cd1.gif)] bg-cover bg-center brightness-75 h-3/4 absolute left-0 right-0 border-2"></div>
        <div className="h-100 flex justify-center items-center opacity-95 flex-col gap-10">
          <h1 className="text-5xl text-white break-normal">
            Communication that empowers
          </h1>
          <button className="bg-[#D9D9D9] hover:cursor-pointer px-5 py-2 rounded-xl transition duration-300 ease-in-out hover:opacity-50">
            Sign up for our A.I. powered chat app
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
