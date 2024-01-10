import React from "react";
import "./WinnerLayout.css";

function WinnerLayout(props) {

  return (
    <div className="winner-background">
      <div className="winner-body">
        <h1>{props.winnerText}</h1>
        <button className="play-again-button" onClick={() => props.playAgain()}>PLAY AGAIN</button>
        <button className="end-game-button" onClick={() => props.endGame()}>END GAME</button>
      </div>
    </div>
  );
}

export default WinnerLayout;
