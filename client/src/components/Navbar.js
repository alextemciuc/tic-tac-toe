import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import UserDropdown from "./UserDropdown";
import { NavLink, useNavigate } from "react-router-dom";
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
        <NavLink className="navbar-brand" to="/">Tic Tac Toe</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav column-gap-3">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/tic-tac-toe" onClick={tictactoeHandler}>Tic Tac Toe</NavLink>
            </li>
            <li className="nav-item">
              { token ? <UserDropdown /> : <NavLink className="nav-link" to="/login">Sign In</NavLink> }
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;