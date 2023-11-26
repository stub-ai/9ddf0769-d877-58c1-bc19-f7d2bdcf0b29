import React from 'react';
import Square from './Square';

interface BoardProps {
  squares: (string | null)[];
  onClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div className="grid grid-cols-8 gap-0.5">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;