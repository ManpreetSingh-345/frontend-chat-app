import axios from "axios";
import { useNavigate } from "react-router";

const handleToken = (authUser, setAuthUser) => {
  const name = authUser?.name;
  const accessToken = authUser?.accessToken;
  const navigate = useNavigate();

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
