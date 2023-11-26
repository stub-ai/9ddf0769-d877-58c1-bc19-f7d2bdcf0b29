import React from 'react';

interface SquareProps {
  value: string | null;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className="w-14 h-14 border border-black" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;