import React, { useState, useEffect } from "react";
import "./App.css";

const arrayOfLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const arrayOfNumbers = ["", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Chessboard = () => {
  const size = 12;
  const [chessboard, setChessboard] = useState([]);

  useEffect(() => {
    const board = [];
    for (let row = 0; row < size - 1; row++) {
      const rowArray = [];
      for (let col = 0; col < size; col++) {
        if (row === 0) {
          if (col < 10) {
            rowArray.push(
              <div key={col} className="square text">
                {arrayOfLetters[col]}
              </div>
            );
          } else {
            rowArray.push(<div key={col} className="square"></div>);
          }
        } else {
          if (col < 10) {
            rowArray.push(
              <div
                key={`${row}-${col}`}
                className={`square ${((row + col) % 2 === 0) ? "light" : "dark"}`}
                data-row={row}
                data-col={col}
                data-value={`${arrayOfLetters[col]}${arrayOfNumbers[row]}`}
              ></div>
            );
          } else if (col === 10) {
            rowArray.push(
              <div key={col} className="square text">
                {arrayOfNumbers[row]}
              </div>
            );
          } else {
            rowArray.push(<div key={col} className="square"></div>);
          }
        }
      }
      board.push(
        <div key={row} className="chessboard-row">
          {rowArray}
        </div>
      );
    }
    setChessboard(board);
  }, []);

  const createChessboard = () => {
    return <div id="board">{chessboard}</div>;
  };

  // const setupChessPieces = () => {
  //   // Logic for setting up initial chess pieces
  // };

  // const movePiece = (fromSquare, toSquare) => {
  //   // Logic for moving chess pieces
  // };

  const handleSquareClick = (event) => {
    const clickedSquare = event.target;
    if (!clickedSquare.classList.contains("square")) return;

    // Logic for handling user clicks on the chessboard
  };

  return (
    <div>
      {createChessboard()}
      {/* {setupChessPieces()} */}
      <div id="board" onClick={handleSquareClick}></div>
    </div>
  );
};

export default Chessboard;
