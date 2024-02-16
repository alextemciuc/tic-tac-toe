import React from "react";

function LoginPage() {
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
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <button className="btn btn-primary">Log in</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;