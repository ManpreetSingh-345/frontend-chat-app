import axios from "axios";
import { useLocation, useNavigate } from "react-router";

const handleRefreshToken = (authUser, setAuthUser) => {
  const name = authUser?.name;
  const accessToken = authUser?.accessToken;
  const navigate = useNavigate();
  const location = useLocation();

  const refreshToken = () => {
    axios
      .post(
        "http://localhost:8080/auth/refresh",
        { name },
        { withCredentials: true }
      )
      .then((res) => {
        const newAccessToken = res.data.newAccessToken;
        setAuthUser({ name, accessToken: newAccessToken });
        console.log(authUser);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          navigate("/login", {
            state: {
              message: "Token expired. Please log in again.",
            },
          });
        }
      });
  };

  const verifyUser = () => {
    axios
      .get("http://localhost:8080/auth/verify", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res.data.message);
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

export default handleRefreshToken;
