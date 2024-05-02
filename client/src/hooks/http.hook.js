import { useState, useCallback } from "react";

function useHttp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true);
    try {
      if (body) {
        body = JSON.stringify(body);
        headers['Content-Type'] = 'application/json';
      }

      const response = await fetch(url, { method, body, headers });

      setLoading(false);

      return response;
    } catch (e) {
      setLoading(false);
      setError(e.message);
      throw e;
    }
  }, [])

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError}
}

export default useHttp;