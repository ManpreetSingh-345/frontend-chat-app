import { useNavigate } from "react-router";
import { useAuth } from "@contexts/AuthContext";
import { useState, useEffect } from "react";
import { useRefreshToken } from "@src/hooks/useRefreshToken";
import { Outlet } from "react-router";

const PersistLogin = () => {
  const navigate = useNavigate();
  const refresh = useRefreshToken();
  const { authUser, isLoggedIn } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const callRefresh = async () => {
      if (!authUser) {
        await refresh();
      }
      setIsLoading(false);
    };
    callRefresh();
  }, []);

  useEffect(() => {
    if (!isLoggedIn && !isLoading) {
      navigate("/login");
    }
  }, [isLoggedIn, isLoading, navigate]);

  return <>{isLoading ? <div>Loading...</div> : <Outlet />}</>;
};

export default PersistLogin;
