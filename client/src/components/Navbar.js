import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import UserDropdown from "./UserDropdown";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { token } = useContext(AuthContext);

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
              <NavLink className="nav-link" to="/tictactoe">Tic Tac Toe</NavLink>
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