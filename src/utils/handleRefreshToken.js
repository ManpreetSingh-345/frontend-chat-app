import axios from "axios";

const handleRefreshToken = (authUser, setAuthUser) => {
  const name = authUser?.name;
  const accessToken = authUser?.accessToken;

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
        console.log(err);
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
