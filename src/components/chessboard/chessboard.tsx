import { MouseEvent, useRef } from "react";
import Tile from "../Tile/tiles";
import "./chessboard.css";
import { log } from "console";

const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

interface Piece {
  image: string;
  x: number;
  y: number;
}

const pieces: Piece[] = [];

for (let p = 0; p < 2; p++) {
  const type = p === 0 ? "d" : "l";
  const y = p === 0 ? 7 : 0;

  pieces.push({
    image: `assets/images/Chess_r${type}t60.png` /* CHeren Top*/,
    x: 0,
    y,
  });
  pieces.push({
    image: `assets/images/Chess_r${type}t60.png` /*CHeren Top */,
    x: 9,
    y,
  });
  pieces.push({
    image: `assets/images/Chess_n${type}t60.png` /*cheren kon */,
    x: 1,
    y,
  });
  pieces.push({
    image: `assets/images/Chess_n${type}t60.png` /*cheren kom */,
    x: 8,
    y,
  });
  pieces.push({
    image: `assets/images/Chess_b${type}t60.png` /*cheren oficer */,
    x: 2,
    y,
  });
  pieces.push({
    image: `assets/images/Chess_b${type}t60.png` /*cheren oficer */,
    x: 7,
    y,
  });
  pieces.push({ image: "assets/images/" /*cheren Princ*/, x: 3, y });
  pieces.push({ image: "assets/images/" /*cherna Princesa */, x: 6, y });
  pieces.push({
    image: `assets/images/Chess_q${type}t60.png` /*cheren DAma*/,
    x: 4,
    y,
  });
  pieces.push({
    image: `assets/images/Chess_k${type}t60.png` /*cherna King */,
    x: 5,
    y,
  });
}

for (let i = 0; i < 10; i++) {
  pieces.push({ image: "assets/images/Chess_pdt60.png", x: i, y: 6 });
}

for (let i = 0; i < 10; i++) {
  pieces.push({ image: "assets/images/Chess_plt60.png", x: i, y: 1 });
}

export default function Chessboard() {
  const chessboardRef = useRef<HTMLDivElement>(null);

  let activePiece: HTMLElement | null = null;

  function grabPiece(e: React.MouseEvent) {
    const element = e.target as HTMLElement;
    if (element.classList.contains("chess-piece")) {
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      element.style.position = "absolute";
      element.style.left = `${x}px`;
      element.style.top = `${y}px`;

      activePiece = element;
    }
  }
  function movePiece(e: React.MouseEvent) {
    const chessboard = chessboardRef.current;
    if (activePiece && chessboard) {
      const minX = chessboard.offsetLeft - 25;
      const minY = chessboard.offsetTop - 25;
      const maxX = chessboard.offsetLeft + chessboard.clientWidth - 75;
      const maxY = chessboard.offsetTop + chessboard.clientHeight - 75;
      const x = e.clientX - 50;
      const y = e.clientY - 50;
      activePiece.style.position = "absolute";

      // If x is smaller then min amount
      if (x < minX) {
        activePiece.style.left = `${minX}px`
      } 
      // If x is bigger then max amount
      else if(x > maxX){
        activePiece.style.left = `${maxX}px`
      }else {
        activePiece.style.left = `${x}px`;
      }
      // If y is smaller then min amount
      if (y < minY) {
        activePiece.style.top = `${minY}px`
      } 
      // If y is bigger then max amount
      else if(y > maxY){
        activePiece.style.top = `${maxY}px`
      }else {
        activePiece.style.top = `${y}px`;
      }
    }
  }
  function dropPiece(e: React.MouseEvent) {
    if (activePiece) {
      activePiece = null;
    }
  }

  let board = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      let image = undefined;

      pieces.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });
      board.push(<Tile key={`${j},${i}`} image={image} number={number} />);
    }
  }
  return (
    <div
      onMouseMove={(e) => movePiece(e)}
      onMouseDown={(e) => grabPiece(e)}
      onMouseUp={(e) => dropPiece(e)}
      id="chessboard"
      ref={chessboardRef}
    >
      {board}
    </div>
  );
}
