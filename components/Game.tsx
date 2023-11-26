import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
  const [boardSquares, setBoardSquares] = useState(Array(64).fill(null));
  const [isWhiteNext, setIsWhiteNext] = useState(true);

  const handleClick = (i: number) => {
    const squares = [...boardSquares];

    // Add your chess logic here

    squares[i] = isWhiteNext ? 'W' : 'B';
    setBoardSquares(squares);

    setIsWhiteNext(!isWhiteNext);
  };

  const renderMoves = () => (
    <button onClick={() => setBoardSquares(Array(64).fill(null))}>
      Start Game
    </button>
  );

  return (
    <div>
      <Board squares={boardSquares} onClick={handleClick} />
      <div>
        <p>
          {`Next Player: ${isWhiteNext ? 'White' : 'Black'}`}
        </p>
        {renderMoves()}
      </div>
    </div>
  );
};

export default Game;