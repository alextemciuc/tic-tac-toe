import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function UserDropdown() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  function logoutHandler(event) {
    event.preventDefault();
    logout();
    navigate('/');
  }

  return (
    <div className="dropdown">
      <NavLink className="nav-link dropdown-toggle" to="/username" role="button" data-bs-toggle="dropdown" aria-expanded="false">Username</NavLink>
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/account">Account</Link></li>
        <li><Link className="dropdown-item" to="/setting">Setting</Link></li>
        <li><Link className="dropdown-item" to="/" onClick={logoutHandler}>Log out</Link></li>
      </ul>
    </div>
  );
}

export default UserDropdown;