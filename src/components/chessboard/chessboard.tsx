import Tile from "../Tile/tiles";
import "./chessboard.css";

const horizontalAxis = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];


interface Piece{
  image:string
  x:number
  y:number
}

 const pieces : Piece[]=[];

 for (let i = 0; i < 10; i++) {
  pieces.push({image : "assets/images/Chess_pdt60.png", x:i, y:6})
 }

 pieces.push({image : "assets/images/Chess_rdt60.png"  /* CHeren Top*/ , x:0, y:7});
 pieces.push({image : "assets/images/Chess_rdt60.png"  /*CHeren Top */ , x:9, y:7});
 pieces.push({image : "assets/images/Chess_ndt60.png"  /*cheren kon */ , x:1, y:7});
 pieces.push({image : "assets/images/Chess_ndt60.png"  /*cheren kom */ , x:8, y:7}); 
 pieces.push({image : "assets/images/Chess_bdt60.png"  /*cheren oficer */ , x:2, y:7});
 pieces.push({image : "assets/images/Chess_bdt60.png"  /*cheren oficer */ , x:7, y:7}); 
 pieces.push({image : "assets/images/"  /*cheren Princ*/ , x:3, y:7}); 
 pieces.push({image : "assets/images/"  /*cherna Princesa */ , x:6, y:7}); 
 pieces.push({image : "assets/images/Chess_qdt60.png"  /*cheren DAma*/ , x:4, y:7}); 
 pieces.push({image : "assets/images/Chess_kdt60.png"  /*cherna King */ , x:5, y:7}); 

 for (let i = 0; i < 10; i++) {
   pieces.push({image : "assets/images/Chess_plt60.png", x:i, y:1})
 }

 pieces.push({image : "assets/images/Chess_rlt60.png"  /*bql top */, x:0, y:0});
 pieces.push({image : "assets/images/Chess_rlt60.png" /*bql top */, x:9, y:0});
 pieces.push({image : "assets/images/Chess_nlt60.png" /* bql kon*/, x:1, y:0});
 pieces.push({image : "assets/images/Chess_nlt60.png" /* bql kon*/, x:8, y:0});
 pieces.push({image : "assets/images/Chess_blt60.png" /* bql oficer*/, x:2, y:0});
 pieces.push({image : "assets/images/Chess_blt60.png" /* bql oficer*/, x:7, y:0});
 pieces.push({image : "assets/images/"  /*bql Princ*/ , x:3, y:0}); 
 pieces.push({image : "assets/images/"  /*bqla Princesa */ , x:6, y:0}); 
 pieces.push({image : "assets/images/Chess_qlt60.png"  /*bqla DAma*/ , x:4, y:0}); 
 pieces.push({image : "assets/images/Chess_klt60.png"  /*bql King */ , x:5, y:0}); 


export default function chessboard() {
    let board = [];
    for (let j = verticalAxis.length - 1; j >= 0 ; j--){
        for (let i = 0; i < horizontalAxis.length; i++){
            const number = j + i + 2;
            let image = undefined
            pieces.forEach(p =>{
            if (p.x ===i && p.y ===j){
              image = p.image;
            }
            })

            board.push(<Tile image= {image} number ={number}/>)

          }    
        }
    return <div id="chessboard">
         {board}
        </div>
}