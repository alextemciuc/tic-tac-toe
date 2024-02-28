import { useCallback, useEffect, useState } from "react";

const storageName = "userData";

function useAuth() {
  const [token, setToken] = useState(null);
  const [id, setId] = useState(null);
  const [username, setUsername] = useState(null);
  const [ready, setReady] = useState(false);

  const login = useCallback((jwtToken, userId, userUsername) => {
    setToken(jwtToken);
    setId(userId);
    setUsername(userUsername);
    localStorage.setItem(storageName, JSON.stringify({ token: jwtToken, id: userId, username: userUsername }));
  }, []);

  function logout() {
    setToken(null);
    setId(null);
    setUsername(null);
    localStorage.removeItem(storageName);
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.id, data.username);
    }

    setReady(true);
  }, [login, username]);

  return { login, logout, token, id, username, ready }
}

export default useAuth;