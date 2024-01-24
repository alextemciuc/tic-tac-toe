import React from "react";
import "./PauseLayout.css";
import { FaCheck, FaTimes } from "react-icons/fa";

function PauseLayout(props) {

  return (
    <div className="confirm-layout-background">
      <div className="confirm-layout-container">
        <div className="confirm-text">Do you want to close the game?</div>
        <div className="confirm-buttons-container">
          <button className="confirm-button" onClick={() => props.endGame()}>
            <FaCheck className="confirm-icon" size="3em" color="#005470" />
          </button>
          <button className="decline-button" onClick={() => props.resumeGame()}>
            <FaTimes className="decline-icon" size="3em" color="#005470" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default PauseLayout;
