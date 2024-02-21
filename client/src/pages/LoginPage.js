import React, { useContext, useEffect, useState } from "react";
import useHttp from "../hooks/http.hook";
import AuthContext from "../context/AuthContext";

function LoginPage() {
  const { login } = useContext(AuthContext);
  const {loading, request, error, clearError} = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    if (error) {
      alert(error);
      clearError();
    }
  }, [error, clearError]);

  function changeHandler(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function loginHandler() {
    try {
      const data = await request('/api/auth/login', 'POST', {...form});
      login(data.token, data.userId);
    } catch (e) {}
  }

  return (
    <div className="row justify-content-center mt-3 bg-primary-subtle">
      <div className="col-4 pt-3 pb-3">
        <div className="mb-3">
          <span>
            Don't have an account?
            <a className="text-decoration-none" href="/register">&nbsp;Sign Up</a>
          </span>
        </div>
        <div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={form.email} onChange={changeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={form.password} onChange={changeHandler} />
          </div>
          <button className="btn btn-primary" onClick={loginHandler} disabled={loading}>Log in</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;