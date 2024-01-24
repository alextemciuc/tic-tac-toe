import React from "react";
import "./ScoreInfo.css";
import { FaHome, FaVolumeUp } from "react-icons/fa";

function ScoreInfo(props) {
  return (
    <div className="info-layout">
      <div className="info-layout-buttons-container">
        <button className="home-button" onClick={() => props.pauseGame()}>
          <FaHome className="home-icon" size="2em" color="#005470" />
        </button>
        <button className="sound-button">
          <FaVolumeUp className="sound-icon" size="2em" color="#005470" />
        </button>
      </div>
      <div className="score-info">
        <div className="player1-name float">Player1(X)</div>
        <div className="player1-score float">{props.score[0]}</div>
        <div className="player2-score float">{props.score[1]}</div>
        <div className="player2-name float">Player2(O)</div>
      </div>
    </div>
  );
}

export default ScoreInfo;
