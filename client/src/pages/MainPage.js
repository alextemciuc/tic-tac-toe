import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import tictactoeLogo from "../images/tic_tac_toe_logo.png";

function MainPage() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  function playHandler() {
    if (token) {
      return navigate('/tic-tac-toe');
    }
    navigate('/login');
  }

  return (
    <div className="row justify-content-center">
      <div className="col-4 pt-3 pb-3">
        <div className="d-flex justify-content-center">
          <img src={tictactoeLogo} alt="Tic tac toe logo" style={{ height: "100px", width: "100px", userSelect: "none" }} />
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary" onClick={playHandler}>Play</button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;