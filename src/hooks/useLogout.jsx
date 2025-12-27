import axios from "@src/api/axios";
import { useAuth } from "@contexts/AuthContext";

export const useLogout = () => {
  const { setAuthUser, setIsLoggedIn } = useAuth();

  const logout = async () => {
    try {
      await axios.post("/users/logout", {}, { withCredentials: true });
      setAuthUser(null);
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return logout;
};
