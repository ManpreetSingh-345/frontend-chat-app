import { axiosPrivate } from "@src/api/axios";
import { useAuth } from "@contexts/AuthContext";
import { useEffect } from "react";
import { useRefreshToken } from "./useRefreshToken";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { authUser } = useAuth();

  useEffect(() => {
    // Intercepts requests by attaching authorization header
    const requestInterceptor = axiosPrivate.interceptors.request.use(
      (config) => {
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${authUser?.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    // Intercepts responses by sending another request after refreshing token (in case of error)
    const responseInterceptor = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if (error?.response?.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true; // Prevents infinite loop in case of second error
          const newAccessToken = await refresh();
          prevRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return axiosPrivate(prevRequest);
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.response.eject(responseInterceptor);
      axiosPrivate.interceptors.request.eject(requestInterceptor);
    };
  }, [refresh, authUser]);
  return axiosPrivate;
};

export default useAxiosPrivate;
