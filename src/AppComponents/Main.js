import React from "react";
import "./Main.css";
import GameLayout from './GameLayout';
import ScoreInfo from './ScoreInfo';
import WinnerLayout from './WinnerLayout';
import MenuLayout from './MenuLayout';
import PauseLayout from './PauseLayout';
import getWinner from "../utils/getWinner";

function Main() {

  const [cells, setCells] = React.useState([
    [{content: '', id: 1}, {content: '', id: 2}, {content: '', id: 3}],
    [{content: '', id: 4}, {content: '', id: 5}, {content: '', id: 6}],
    [{content: '', id: 7}, {content: '', id: 8}, {content: '', id: 9}]
  ]);

  const [playerTurn, setPlayerTurn] = React.useState('X');
  const [menuLayoutState, setMenuLayoutState] = React.useState(true);
  const [gameLayoutState, setGameLayoutState] = React.useState(false);
  const [winnerLayoutState, setWinnerLayoutState] = React.useState(false);
  const [pauseLayoutState, setPauseLayoutState] = React.useState(false);
  const [score, setScore] = React.useState([0, 0]);
  const [winnerText, setWinnerText] = React.useState('');

  function checkWinner(cells) {
    const winner = getWinner(cells);

    if (winner === 'X') {
      setWinnerText('Player1 win!');
      setWinnerLayoutState(true);
      setScore([score[0] + 1, score[1]]);
    } else if (winner === 'O') {
      setWinnerText('Player2 win!');
      setWinnerLayoutState(true);
      setScore([score[0], score[1] + 1]);
    } else if (winner === 'D') {
      setWinnerText('Draw! Try again!');
      setWinnerLayoutState(true);
    }
  }

  function handleCells(id) {
    setCells((cells) => {
      const newCells = cells.map((row) => {
        return row.map((cell) => {
          if (cell.content === '' && cell.id === id) {
            cell.content = playerTurn;
            switch (playerTurn) {
              case 'X':
                setPlayerTurn('O');
                break;
              default:
                setPlayerTurn('X');
                break;
            }
          }
          return cell;
        });
      });
      checkWinner(newCells);
      return newCells;
    });
  }

  function newGame() {
    setCells(cells.map((row) => {
      return row.map((cell) => {
        cell.content = '';
        return cell;
      });
    }));
    setScore([0, 0]);
    setPlayerTurn('X');
    setMenuLayoutState(false);
    setGameLayoutState(true);
  }

  function playAgain() {
    setCells(cells.map((row) => {
      return row.map((cell) => {
        cell.content = '';
        return cell;
      });
    }));
    setPlayerTurn('X');
    setWinnerLayoutState(false);
  }

  function endGame() {
    if (winnerLayoutState === true) {
      setWinnerLayoutState(false);
    } else {
      setPauseLayoutState(false);
    }
    setGameLayoutState(false);
    setMenuLayoutState(true);
  }

  function pauseGame() {
    setPauseLayoutState(true);
  }

  function resumeGame() {
    setPauseLayoutState(false);
  }

  return (
    <div className='main'>
      {winnerLayoutState && <WinnerLayout winnerText={winnerText} playAgain={playAgain} endGame={endGame} />}
      {pauseLayoutState && <PauseLayout resumeGame={resumeGame} endGame={endGame} />}
      {menuLayoutState && <MenuLayout newGame={newGame} />}
      {gameLayoutState && <ScoreInfo score={score} pauseGame={pauseGame} />}
      {gameLayoutState && <GameLayout handleCells={handleCells} cells={cells} />}
    </div>
  );
}

export default Main;
