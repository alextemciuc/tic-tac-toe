
function getWinner(cells) {
  let winner;
  let isCellEmpty = false;
  let isWinnerFound = true;

  for (let i=0; i<cells.length; i++) {
    isCellEmpty = false;
    isWinnerFound = true;
    for (let j=0; j<cells[0].length; j++) {
      if (cells[i][j].content === '') {
        isCellEmpty = true;
        isWinnerFound = false;
      }
    }
    if (isCellEmpty !== true) {
      for (let j=0; j<cells[0].length-1; j++) {
        if (cells[i][j].content !== cells[i][j+1].content) {
          isWinnerFound = false;
        }
      }
    }
    if (isWinnerFound) {
      winner = cells[i][0].content;
      return winner;
    }
  }

  if (isWinnerFound !== true) {
    for (let i=0; i<cells[0].length; i++)  {
      isCellEmpty = false;
      isWinnerFound = true;
      for (let j=0; j<cells.length; j++) {
        if (cells[j][i].content === '') {
          isCellEmpty = true;
          isWinnerFound = false;
        }
      }
      if (isCellEmpty !== true) {
        for (let j=0; j<cells.length-1; j++) {
          if (cells[j][i].content !== cells[j+1][i].content) {
            isWinnerFound = false;
          }
        }
      }
      if (isWinnerFound) {
        winner = cells[0][i].content;
        return winner;
      }
    }
  }

  if (isWinnerFound !== true) {
    isCellEmpty = false;
    isWinnerFound = true;
    for (let i=0; i<cells.length; i++) {
      if (cells[i][i].content === '') {
        isCellEmpty = true;
        isWinnerFound = false;
      }
    }
    if (isCellEmpty !== true) {
      for (let i=0; i<cells.length-1; i++) {
        if (cells[i][i].content !== cells[i+1][i+1].content) {
          isWinnerFound = false;
        }
      }
    }
    if (isWinnerFound) {
      winner = cells[0][0].content;
      return winner;
    }
  }

  if (isWinnerFound !== true) {
    isCellEmpty = false;
    isWinnerFound = true;
    for (let i=0; i<cells.length; i++) {
      if (cells[i][cells.length-1-i].content === '') {
        isCellEmpty = true;
        isWinnerFound = false;
      }
    }
    if (isCellEmpty !== true) {
      for (let i=0; i<cells.length-1; i++) {
        if (cells[i][cells.length-1-i].content !== cells[i+1][cells.length-2-i].content) {
          isWinnerFound = false;
        }
      }
    }
    if (isWinnerFound) {
      winner = cells[0][cells.length-1].content;
      return winner;
    }
  }

  if (isWinnerFound !== true) {
    isCellEmpty = false;
    for (let i=0; i<cells.length; i++) {
      for (let j=0; j<cells[0].length; j++){
        if (cells[i][j].content === '') {
          isCellEmpty = true;
        }
      }
    }
    if (isCellEmpty !== true) {
      winner = 'D';
      return winner;
    }
  }
}

export default getWinner;
