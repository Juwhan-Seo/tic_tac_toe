let board, currentPlayer;

function initializeGame() {
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  currentPlayer = 'X';
  printBoard();
  document.getElementById('turn').innerText = currentPlayer;
}

const boardElement = document.getElementById('board');
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.addEventListener('click', () => makeMove(i, j));
    boardElement.appendChild(cellElement);
  }
}

function printBoard() {
  let index = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      boardElement.children[index].textContent = board[i][j];
      index++;
    }
  }
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
      alert(currentPlayer + " 승리!");
      initializeGame();
      return true;
    }
    if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
      alert(currentPlayer + " 승리!");
      initializeGame();
      return true;
    }
  }
  if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
    alert(currentPlayer + " 승리!");
    initializeGame();
    return true;
  }
  if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
    alert(currentPlayer + " 승리!");
    initializeGame();
    return true;
  }
  if (!board.flat().includes(' ')) {
    alert("비김!");
    initializeGame();
    return true;
  }
  return false;
}

function makeMove(x, y) {
  if (board[x][y] === ' ') {
    board[x][y] = currentPlayer;
    if (!checkWinner()) {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  } else {
    alert("이미 선택된 칸입니다!");
  }
  printBoard();
}

initializeGame();