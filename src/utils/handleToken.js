import { useNavigate } from "react-router";
import useAxiosPrivate from "@src/hooks/useAxiosPrivate";

// This code will not be used in production, only for development/testing
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

    axiosPrivate
      .get("/auth/verify")
      .then((res) => {
        console.log(res.data.message); // Replace with status code 200 (Ok) for accessing protected routes
      })
      .catch((err) => {
        console.error(err);
        console.log("User not verified");
        console.log("Attempting to refresh token");
        refreshToken();
      });
  };

  return verifyUser;
};

export default handleToken;
