
let board, currentPlayer;
let messageElement;
let turnElement;
let boardElement;

function initializeGame() {
  board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];
  currentPlayer = 'X';
  messageElement = document.getElementById('message');
  turnElement = document.getElementById('turn');
  boardElement = document.getElementById('board');
  createBoard();
  printBoard();
  updateTurnDisplay();
}

function createBoard() {
  boardElement.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cellElement = document.createElement('div');
      cellElement.classList.add('cell');
      cellElement.addEventListener('click', () => makeMove(i, j));
      boardElement.appendChild(cellElement);
    }
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

function updateTurnDisplay() {
  turnElement.innerText = currentPlayer;
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (checkLine(board[i][0], board[i][1], board[i][2])) {
      showMessage(currentPlayer + " 승리!");
      initializeGame();
      return true;
    }
    if (checkLine(board[0][i], board[1][i], board[2][i])) {
      showMessage(currentPlayer + " 승리!");
      initializeGame();
      return true;
    }
  }
  if (checkLine(board[0][0], board[1][1], board[2][2]) || checkLine(board[0][2], board[1][1], board[2][0])) {
    showMessage(currentPlayer + " 승리!");
    initializeGame();
    return true;
  }
  if (!board.flat().includes(' ')) {
    showMessage("비김!");
    initializeGame();
    return true;
  }
  return false;
}

function checkLine(a, b, c) {
  return a === b && b === c && a !== ' ';
}

function showMessage(message) {
  messageElement.textContent = message;
  setTimeout(() => {
    messageElement.textContent = '';
  }, 2000);
}

function makeMove(x, y) {
  if (board[x][y] === ' ') {
    board[x][y] = currentPlayer;
    if (!checkWinner()) {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      updateTurnDisplay();
    }
  } else {
    showMessage("이미 선택된 칸입니다!");
  }
  printBoard();
}

initializeGame();
