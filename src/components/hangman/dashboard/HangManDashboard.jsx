import HangmanTime from './HangmanTime'

const HangManDashboard = ({ hasLost, hasWon, highestScore, lifes, score }) => {
  return (
    <div className='hangman-dashboard'>
      <div className='hangman-dashboard__score'>
        <span>Score:</span>
        <span>{score}</span>
      </div>
      <div className='hangman-dashboard__highest-score'>
        <span>Highest-Score:</span>
        <span>{highestScore}</span>
      </div>
      <div className='hangman-dashboard__lifes'>
        <span>Lifes Left: </span>
        <span>{lifes}</span>
      </div>

      <HangmanTime hasWon={hasWon} hasLost={hasLost} />
    </div>
  )
}

export default HangManDashboard
