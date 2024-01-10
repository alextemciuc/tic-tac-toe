import React from "react";
import "./MenuLayout.css";

function MenuLayout(props) {
  return (
    <div className="menu">
      <div className="menu-buttons-container">
        <button className="menu-game-button">CONTINUE</button>
        <button className="menu-game-button" onClick={() => props.newGame()}>NEW GAME</button>
      </div>
    </div>
  );
}

export default MenuLayout;