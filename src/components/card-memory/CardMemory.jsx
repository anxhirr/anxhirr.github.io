import React, { useEffect, useState } from 'react';

const CardMemory = () => {
  const [grid, setGrid] = useState([
    [
      { number: 0, show: false },
      { number: 5, show: false },
      { number: 1, show: false },
      { number: 4, show: false },
    ],
    [
      { number: 2, show: false },
      { number: 1, show: false },
      { number: 3, show: false },
      { number: 4, show: false },
    ],
    [
      { number: 3, show: false },
      { number: 2, show: false },
      { number: 5, show: false },
      { number: 0, show: false },
    ],
  ]);
  const [prevCardPosition, setPrevCardPosition] = useState([]);
  const [hasWon, setHasWon] = useState(false);

  const handleCardClick = (revealedRowIndex, revealedColIndex) => {
    const clickedCard = grid[revealedRowIndex][revealedColIndex];

    const newGrid = [...grid];
    newGrid[revealedRowIndex][revealedColIndex].show = true;
    setGrid(newGrid);

    setPrevCardPosition([revealedRowIndex, revealedColIndex]);

    const [prevCardX, prevCardY] = prevCardPosition;

    if (prevCardPosition.length === 0) return;

    const prevRevealedCard = grid[prevCardX][prevCardY];

    if (prevRevealedCard.number === clickedCard.number) {
      setPrevCardPosition([]);
    } else {
      setTimeout(() => {
        newGrid[revealedRowIndex][revealedColIndex].show = false;
        newGrid[prevCardX][prevCardY].show = false;

        setGrid(newGrid);
        setPrevCardPosition([]);
      }, 1000);
    }
  };

  return (
    <section className='card-memory-section'>
      <div className='card-game container'>
        <div className='card-game__content'>
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className='card-game__column'>
              {row.map((col, colIndex) => (
                <div
                  key={colIndex}
                  onClick={() => handleCardClick(rowIndex, colIndex)}
                  className='card-game__card'
                >
                  <div key={colIndex} className='card-game__row'>
                    {col.show ? col.number : ''}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardMemory;
