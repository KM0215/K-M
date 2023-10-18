const board = document.getElementById("board");
const size = 10;
let arrayOfLetters = ["A","B","C","D","E","F","G","H","I","J"]
let arrayOfNumbers = ["",1,2,3,4,5,6,7,8,9,10]
function createChessboard() {
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (row == 0) {
        debugger
       for (let index = 0; index < arrayOfLetters.length; index++) {
        const square = document.createElement("div");
        square.classList.add(
            "squear",
            "text"
            );
        square.textContent = arrayOfLetters[index]
        board.appendChild(square);
       }
       break;
      } else {
        const square = document.createElement("div");
        square.classList.add(
          "square",
          (row + col) % 2 === 0 ? "light" : "dark"
        );
        square.dataset.row = row;
        square.dataset.col = col;
        square.value = arrayOfLetters[col] 
        board.appendChild(square);
      }
    }
  }

//   for (let row = 0; row < arrayOfNumbers.length; index++) {
//     col = 11
    
//   }
}

function setupChessPieces() {
  // You can add logic here to set up the initial chess pieces on the board
}

function movePiece(fromSquare, toSquare) {
  // Implement your logic to move chess pieces
}

function handleSquareClick(event) {
  const clickedSquare = event.target;
  if (!clickedSquare.classList.contains("square")) return;

  // Implement logic for handling user clicks on the chessboard
}

createChessboard();
setupChessPieces();
board.addEventListener("click", handleSquareClick);
