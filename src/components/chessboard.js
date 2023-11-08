import React from "react";

import "./chessboard.css"

const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

export default function chessboard() {
    let board = [];
    for (let j = verticalAxis.length - 1; j >= 0 ; j--){
        for (let i = 0; i < horizontalAxis.length; i++){
            const number = j + i + 2;

            if (number % 2 === 0) {
             board.push(
               <div className="black-tile"></div>
               //{horizontalAxis[i]}{verticalAxis[j]}
            );    
            } else {
             board.push(
                <div className="white-tile"></div>
                //{horizontalAxis[i]}{verticalAxis[j]}
             );    
            }
           
          }    
        }
    return <div id="chessboard">
        {board}
    </div>;
}