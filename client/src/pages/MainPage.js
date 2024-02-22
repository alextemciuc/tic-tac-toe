import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function MainPage() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  function playHandler() {
    if (token) {
      return navigate('/tictactoe');
    }
    navigate('/login');
  }

  return (
    <div className="row justify-content-center mt-3 bg-primary-subtle">
      <div className="col-4 pt-3 pb-3">
        <div className="d-flex justify-content-center">
          <span>Tic Tac Toe</span>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" onClick={playHandler}>Play</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;