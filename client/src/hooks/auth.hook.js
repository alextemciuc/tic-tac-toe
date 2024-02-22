import { useCallback, useEffect, useState } from "react";

const storageName = "userData";

function useAuth() {
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  const [ready, setReady] = useState(false);

  const login = useCallback((jwtToken, userId) => {
    setToken(jwtToken);
    setId(userId);
    localStorage.setItem(storageName, JSON.stringify({ token: jwtToken, id: userId }));
  }, []);

  function logout() {
    setToken(null);
    setId(null);
    localStorage.removeItem(storageName);
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.id);
    }

    setReady(true);
  }, [login]);

  return { login, logout, token, id, ready }
}

export default useAuth;