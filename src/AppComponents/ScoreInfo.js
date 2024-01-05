import React from "react";
import './ScoreInfo.css';

function ScoreInfo(props) {
    return (
        <div className="info-layout">
            <div className="info-layout-buttons-container">
                <button className="pauseButton" onClick={() => props.pauseGame()}>PAUSE</button>
                <button className="saveButton">SAVE</button>
            </div>
            <div className="scoreInfo">
                <div className="player1Name float">Player1(X)</div>
                <div className="player1Score float">{props.score[0]}</div>
                <div className="player2Score float">{props.score[1]}</div>
                <div className="player2Name float">Player2(O)</div>
            </div>
        </div>
    );
}

export default ScoreInfo;
