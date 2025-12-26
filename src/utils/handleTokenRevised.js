import { useNavigate } from "react-router";
import useAxiosPrivate from "@src/hooks/useAxiosPrivate";

// Future modifications will include asynchronous handling of responses
// for race conditions
const handleToken = (authUser, setAuthUser, setIsLoggedIn) => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const refreshToken = () => {
    axiosPrivate
      .post("/auth/refresh")
      .then((res) => {
        const name = res.data.name;
        const newAccessToken = res.data.newAccessToken;
        setAuthUser({ name, accessToken: newAccessToken });
        setIsLoggedIn(true);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          setIsLoggedIn(false);
          navigate("/login", {
            state: {
              message: "Token expired. Please log in again.",
            },
          });
        }
      });
  };

  const verifyUser = () => {
    if (!authUser) {
      refreshToken();
    }

    const response = axiosPrivate.get("")
  };

  return verifyUser;
};

export default handleToken;
