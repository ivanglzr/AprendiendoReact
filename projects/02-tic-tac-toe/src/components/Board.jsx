import { Square } from "./Square";

export function Board(board) {
  const squares = board.map((square, index) => {
    return (
      <Square key={index} index={index} updateBoard={updateBoard}>
        {square}
      </Square>
    );
  });

  return { squares };
}
