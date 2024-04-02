import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import UserDropdown from "./UserDropdown";
import { useNavigate } from "react-router-dom";
import useHttp from "../hooks/http.hook";

function Navbar() {
  const { token, logout } = useContext(AuthContext);
  const { request } = useHttp();
  const navigate = useNavigate();

  async function tictactoeHandler(event) {
    event.preventDefault();
    try {
      await request('/api/auth/check', 'POST', null, {Authorization: `Bearer ${token}`});
      navigate('/tic-tac-toe');
    } catch (e) {
      logout();
      navigate('/');
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand" href="/">Tic Tac Toe</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav column-gap-3">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tic-tac-toe" onClick={tictactoeHandler}>Tic Tac Toe</a>
            </li>
            <li className="nav-item">
              { token ? <UserDropdown /> : <a className="nav-link" href="/login">Sign In</a> }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;