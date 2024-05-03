import React, { useState } from "react";
import useHttp from "../hooks/http.hook";

function RegisterPage() {
  const {loading, request} = useHttp();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    dateOfBirth: '',
    email: '',
    password: ''
  });

  function changeHandler(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function registerHandler() {
    try {
      const response = await request('/api/auth/register', 'POST', {...form});
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Something wrong.');
      }
      console.log('Data: ', data);
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="row justify-content-center">
      <div className="col-4 pt-3 pb-3">
        <div className="mb-3">
          <span>
            Have an account?
            <a className="text-decoration-none" href="/login">&nbsp;Log in now</a>
          </span>
        </div>
        <div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">First Name</label>
            <input type="text" name="firstName" className="form-control" value={form.firstName} onChange={changeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Last Name</label>
            <input type="text" name="lastName" className="form-control" value={form.lastName} onChange={changeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Username</label>
            <input type="text" name="username" className="form-control" value={form.username} onChange={changeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label">Date Of Birth</label>
            <input type="date" name="dateOfBirth" className="form-control" value={form.dateOfBirth} onChange={changeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" name="email" className="form-control" value={form.email} onChange={changeHandler} />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" name="password" className="form-control" value={form.password} onChange={changeHandler} />
            <div id="passwordHelpBlock" className="form-text">
              Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
            </div>
          </div>
          <button className="btn btn-primary" onClick={registerHandler} disabled={loading}>Sign up</button>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;