import React, { useEffect, useState } from 'react';
import SingleCard from './SingleCard';

const INITIAL__CARDS = [
  { number: 1, show: false },
  { number: 2, show: false },
  { number: 3, show: false },
  { number: 4, show: false },
  { number: 5, show: false },
  { number: 6, show: false },
];

const CardMemory = () => {
  const [cards, setCards] = useState([]);
  const [choice1, setChoice1] = useState(null);
  const [choice2, setChoice2] = useState(null);
  const [disabled, setDisabled] = useState(false);
  // const [hasWon, setHasWon] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...INITIAL__CARDS, ...INITIAL__CARDS]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  const resetTurn = () => {
    setChoice1(null);
    setChoice2(null);
    setDisabled(false);
  };

  useEffect(() => {
    if (!choice2) return;
    setDisabled(true);

    if (choice1.number === choice2.number) {
      console.log('equal');

      setCards((prev) =>
        prev.map((c) => {
          if (c.id === choice1.id || c.id === choice2.id) {
            return { ...c, show: true };
          } else {
            return c;
          }
        })
      );
      resetTurn();
    }
    if (choice1.number !== choice2.number) {
      console.log('not equal');

      setTimeout(() => {
        setCards((prev) =>
          prev.map((c) => {
            if (c.id === choice1.id || c.id === choice2.id) {
              return { ...c, show: false };
            } else {
              return c;
            }
          })
        );
      }, 1000);
      resetTurn();
    }
  }, [choice1, choice2, disabled]);

  const handleChoice = (card) => {
    !choice1 ? setChoice1(card) : setChoice2(card);

    setCards((prev) => {
      return prev.map((c) => {
        if (c.id === card.id) {
          return { ...c, show: true };
        } else {
          return c;
        }
      });
    });
  };

  const handleNewGame = () => {
    shuffleCards();
  };

  // const handleVictory = () => {
  //   setHasWon(true);
  // };

  return (
    <section className='card-game '>
      <div className='card-game__content'>
        <button onClick={handleNewGame} className='card-game__button'>
          new game
        </button>
        <div className='card-game__cards'>
          {cards.map((card, index) => (
            <SingleCard
              key={index}
              cards={cards}
              card={card}
              handleChoice={handleChoice}
              shown={card === choice1 || card === choice2 || card.show}
              disabled={disabled}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardMemory;
