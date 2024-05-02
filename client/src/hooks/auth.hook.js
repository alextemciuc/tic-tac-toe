import { useCallback, useEffect, useState } from "react";
import useHttp from "./http.hook";

const storageName = "userData";
let isRefreshed = false;

function useAuth() {
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  const [username, setUsername] = useState(null);
  const [ready, setReady] = useState(false);
  const { request } = useHttp();

  const login = useCallback((jwtToken, userId, userUsername) => {
    setToken(jwtToken);
    setId(userId);
    setUsername(userUsername);
    localStorage.setItem(storageName, JSON.stringify({ token: jwtToken, id: userId, username: userUsername }));
  }, []);

  const logout = useCallback(async () => {
    try {
      const response = await request('/api/auth/logout', 'POST', null, {});
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Something wrong');
      }
      setToken(null);
      setId(null);
      setUsername(null);
      localStorage.removeItem(storageName);
    } catch (e) {
      alert('Error: ', e);
    }
  }, [request]);

  const refreshToken = useCallback(async () => {
    try {
      const response = await request('/api/auth/refresh', 'GET', null, {});
      const data = await response.json();
      if (!response.ok) {
        if (response.status === 401) {
          return await logout();
        }
        throw new Error(data.message || 'Something wrong');
      }
      login(data.token, data.userId, data.username);
    } catch (e) {
      console.log('Error: ', e);
    }
  }, [request, login, logout]);

  useEffect(() => {
    const refreshTokenData = async () => {
      const data = JSON.parse(localStorage.getItem(storageName));

      if (data && data.token) {
        await refreshToken();
      }

      setReady(true);
    }

    if (!isRefreshed) {
      isRefreshed = true;
      refreshTokenData();
    }
  }, [refreshToken]);

  return { login, logout, token, id, username, ready }
}

export default useAuth;