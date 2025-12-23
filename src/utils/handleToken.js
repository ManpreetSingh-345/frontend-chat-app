import axios from "axios";
import { useNavigate } from "react-router";

// Future modifications will include asynchronous handling of respones
// for race conditions
const handleToken = (authUser, setAuthUser, setIsLoggedIn) => {
  const navigate = useNavigate();

  const refreshToken = () => {
    axios
      .post("http://localhost:8080/auth/refresh", {}, { withCredentials: true })
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

    const accessToken = authUser?.accessToken;
    axios
      .get("http://localhost:8080/auth/verify", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        setIsLoggedIn(true);
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
