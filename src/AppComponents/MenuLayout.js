import React from "react";
import "./MenuLayout.css";
import { FaCog, FaPlay } from "react-icons/fa";

function MenuLayout(props) {
  return (
    <div className="menu">
      <div className="game-title-container">
        <h1 className="game-title">Tic Tac Toe</h1>
      </div>
      <div className="config-container">
        <button className="config-button">
          <FaCog className="config-icon" size="2.5em" />
        </button>
      </div>
      <div className="play-container">
        <button className="play-button" onClick={() => props.newGame()}>
          <FaPlay className="play-icon" size="3em" />
        </button>
      </div>
    </div>
  );
}

export default MenuLayout;