import React from "react";
import "./WinnerLayout.css";

function WinnerLayout(props) {

  // return (
  //   <div className="winner-background">
  //     <div className="winner-body">
  //       <h1 className="winner-text">{props.winnerText}</h1>
  //       <button className="play-again-button" onClick={() => props.playAgain()}>PLAY AGAIN</button>
  //       <button className="end-game-button" onClick={() => props.endGame()}>END GAME</button>
  //     </div>
  //   </div>
  // );

  return (
    <div className="winner-background">
      <div className="winner-container">
        <div className="winner-text2-container">
          <span className="winner-text2">{props.winnerText}</span>
        </div>
        <div className="play-again-button2">
          <div className="button-text" onClick={() => props.playAgain()}>Press to continue</div>
        </div>
      </div>
    </div>
    
  );
}

export default WinnerLayout;
