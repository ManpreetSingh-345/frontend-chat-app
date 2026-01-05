import { useAuth } from "@contexts/AuthContext";
import axios from "../api/axios";

export const useRefreshToken = () => {
  const { setAuthUser, setIsLoggedIn } = useAuth();

  const refresh = async () => {
    try {
      const response = await axios.post(
        "/auth/refresh",
        {},
        {
          withCredentials: true,
        }
      );

      if (response?.status === 403) {
        setIsLoggedIn(false);
        return null;
      }

      const newAccessToken = response.data.newAccessToken;
      const name = response.data.name;
      setAuthUser({ name, accessToken: newAccessToken });
      setIsLoggedIn(true);
      return newAccessToken;
    } catch (error) {
      setAuthUser({});
      setIsLoggedIn(false);
      return null;
    }
  };

  return refresh;
};
