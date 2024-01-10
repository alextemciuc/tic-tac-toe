import React from "react";
import "./PauseLayout.css";

function PauseLayout(props) {

  return (
    <div className="pause-layout-background">
      <div className="pause-layout-body">
        <button className="resume-button" onClick={() => props.resumeGame(false)}>RESUME</button>
        <button className="end-game-button" onClick={() => props.endGame()}>END GAME</button>
      </div>
    </div>
  );
}

export default PauseLayout;
