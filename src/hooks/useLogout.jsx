import axios from "@src/api/axios";
import { useAuth } from "@contexts/AuthContext";
import { useNavigate } from "react-router";

export const useLogout = () => {
  const { setAuthUser, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await axios.post("/users/logout", {}, { withCredentials: true });
      setAuthUser(null);
      setIsLoggedIn(false);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return logout;
};
