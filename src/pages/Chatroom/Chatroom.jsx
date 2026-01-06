import Navbar from "@components/Navbar";
import { useAuth } from "@contexts/AuthContext";
import { useLogout } from "@src/hooks/useLogout";
import tumbleweedIcon from "@assets/tumbleweed.png";

const Chatroom = () => {
  const logout = useLogout();
  const { authUser } = useAuth();
  return (
    <div className="chatpage grid grid-cols-10 grid-rows-10 bg-[#1E2A42] h-[100vh]">
      <nav className="flex justify-between row-span-1 col-span-10 text-white px-3 py-4">
        <div className="font-[inter] font-bold md:text-3xl text-[5vw] text-white hover:cursor-pointer">
          Chatlify
        </div>
        <div>
          <div>Current User: {authUser.name}</div>
          <button onClick={logout} className="bg-white text-black">
            Logout
          </button>
        </div>
      </nav>
      <aside className="grid bg-[#77A4FF] row-span-10 col-span-2 text-white p-5">
        <div>{authUser.name}'s Chats</div>
      </aside>
      <main className="font-[inter] row-span-10 col-span-8 flex flex-col gap-3 justify-center items-center text-white">
        <div>
          <img
            src={tumbleweedIcon}
            alt="Tumbleweed Icon"
            className="size-16 m-auto"
          />
        </div>
        <div>Seems quite empty here... Chat with someone!</div>
      </main>
    </div>
  );
};

export default Chatroom;
