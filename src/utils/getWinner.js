
function getWinner(cells) {
    let winner;
    let isCellEmpty = false;
    for (let i=0; i<3; i++) {
      if (cells[i].content === 'X' && cells[i+3].content === 'X' && cells[i+6].content === 'X') {
        winner = 'X';
      } else if (cells[i].content === 'O' && cells[i+3].content === 'O' && cells[i+6].content === 'O') {
        winner = 'O';
      }
    }
    if (winner !== 'X' && winner !== 'O') {
      for (let i=0; i<9; i+=3) {
        if (cells[i].content === 'X' && cells[i+1].content === 'X' && cells[i+2].content === 'X') {
          winner = 'X';
        } else if (cells[i].content === 'O' && cells[i+1].content === 'O' && cells[i+2].content === 'O') {
          winner = 'O';
        }
      }
    }
    if (winner !== 'X' && winner !== 'O') {
      if ((cells[0].content === 'X' && cells[4].content === 'X' && cells[8].content === 'X') || (cells[2].content === 'X' && cells[4].content === 'X' && cells[6].content === 'X')) {
        winner = 'X';
      } else if ((cells[0].content === 'O' && cells[4].content === 'O' && cells[8].content === 'O') || (cells[2].content === 'O' && cells[4].content === 'O' && cells[6].content === 'O')) {
        winner = 'O';
      }
    }
    if (winner !== 'X' && winner !== 'O') {
      for (let i=0; i<9; i++) {
        if (cells[i].content === '') {
          isCellEmpty = true;
        }
      }
      if (isCellEmpty !== true) {
        winner = 'D';
      }
    }

    return winner;
}

export default getWinner;
