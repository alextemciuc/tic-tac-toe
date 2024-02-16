import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container">
        <a className="navbar-brand" href="/">Tic Tac Toe</a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav column-gap-3">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/tictactoe">Tic Tac Toe</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;