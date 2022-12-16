import React, { useEffect, useState } from 'react'
import SingleCard from './SingleCard'
import useLocalStorage from '../../hooks/useLocalStorage'

const INITIAL__CARDS = [
  { number: 1, show: false },
  { number: 2, show: false },
  { number: 3, show: false },
  { number: 4, show: false },
  { number: 5, show: false },
  { number: 6, show: false },
]

const shuffleCards = () => {
  return [...INITIAL__CARDS, ...INITIAL__CARDS]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))
}

const Memory = () => {
  const [cards, setCards] = useState(shuffleCards())
  const [choice1, setChoice1] = useState(null)
  const [choice2, setChoice2] = useState(null)
  const [disabled, setDisabled] = useState(false)
  const [hasWon, setHasWon] = useState(false)
  const [turns, setTurns] = useLocalStorage('memory-game-turns', '0')

  const resetTurn = () => {
    setChoice1(null)
    setChoice2(null)
    setDisabled(false)
    setTurns((prev) => +prev + 1)
  }

  useEffect(() => {
    if (!choice2) return
    setDisabled(true)

    if (choice1.number === choice2.number) {
      setCards((prev) =>
        prev.map((card) => {
          if (card.id === choice1.id || card.id === choice2.id) {
            return { ...card, show: true }
          } else {
            return card
          }
        })
      )
      resetTurn()
    }

    if (choice1.number !== choice2.number) {
      setTimeout(() => {
        resetTurn()
      }, 1000)
    }
  }, [choice1, choice2])

  const handleChoice = (card) => {
    !choice1 ? setChoice1(card) : setChoice2(card)
  }

  const handleNewGame = () => {
    setCards(shuffleCards())
  }

  const handleVictory = () => {
    setHasWon(true)
  }

  return (
    <section className='card-game '>
      <div className='card-game__content'>
        <button
          onClick={handleNewGame}
          className='btn card-game__button u-margin-b--tiny'
        >
          new game
        </button>
        <div className='card-game__cards'>
          {cards.map((card, index) => (
            <SingleCard
              key={index}
              cards={cards}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choice1 || card === choice2 || card.show}
              disabled={disabled}
            />
          ))}
        </div>
        <div className='card-game__turns u-margin-t--tiny'>Turns: {turns}</div>
      </div>
    </section>
  )
}

export default Memory
