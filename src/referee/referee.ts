import {
  Piece,
  PieceType,
  TeamType,
} from "../components/chessboard/chessboard";

export default class Referee {
  tileIsOccupite(x: number, y: number, boardState: Piece[]): boolean {
    const piece = boardState.find((p) => p.x === x && p.y === y);

    if (piece) {
      return true;
    } else {
      return false;
    }
  }

  tileIsOccupiteByOppponent(
    x: number,
    y: number,
    boardState: Piece[],
    team: TeamType
  ): boolean {
    const piece = boardState.find(
      (p) => p.x === x && p.y === y && p.team !== team
    );

    if (piece) {
      return true;
    } else {
      return false;
    }
  }
  isValidMove(
    px: number,
    py: number,
    x: number,
    y: number,
    type: PieceType,
    team: TeamType,
    boardState: Piece[]
  ) {


    if (type === PieceType.PAWN) {
      const specialRow = team === TeamType.OUR ? 1 : 6;
      const pawnDirection = team === TeamType.OUR ? 1 : -1;
      //movement logic
      if (px === x && py === specialRow && y - py === 2 * pawnDirection) {
        if (
          !this.tileIsOccupite(x, y, boardState) &&
          !this.tileIsOccupite(x, y - pawnDirection, boardState)
        ) {
          return true;
        }
      } else if (px === x && y - py === pawnDirection) {
        if (!this.tileIsOccupite(x, y, boardState)) {
          return true;
        }
      }
      //Atack logic
      else if (x - px === -1 && y - py === pawnDirection) {
        //Atack in upper or bottom left corner
        console.log("upper or bottom left corner");
        if (this.tileIsOccupiteByOppponent(x, y, boardState, team)) {
          return true;
        }
      } else if (x - px === 1 && y - py === pawnDirection) {
        //Atack in upper or bottom right corner
        console.log("upper or bottom right corner");
        if (this.tileIsOccupiteByOppponent(x, y, boardState, team)) {
          return true;
        }
      }
    }

    return false;
  }
}
