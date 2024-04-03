import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function UserDropdown() {
  const { logout, username } = useContext(AuthContext);
  const navigate = useNavigate();

  function logoutHandler(event) {
    event.preventDefault();
    logout();
    navigate('/');
  }

  return (
    <div className="dropdown">
      <a className="nav-link dropdown-toggle" href="/username" role="button" data-bs-toggle="dropdown" aria-expanded="false">{username}</a>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="/account">My account</a></li>
        <li><a className="dropdown-item" href="/match-history">Statistics</a></li>
        <li><a className="dropdown-item" href="/setting">Setting</a></li>
        <li><a className="dropdown-item" href="/" onClick={logoutHandler}>Log out</a></li>
      </ul>
    </div>
  );
}

export default UserDropdown;