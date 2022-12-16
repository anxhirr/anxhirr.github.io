import { createSlice } from '@reduxjs/toolkit'
import WordList from './data/WordList'

const TIME__LIMIT = 15
const LIFES = 4

const getNewWord = () => {
  return WordList[Math.floor(Math.random() * WordList.length)]
}

const initialState = {
  toGuessWord: getNewWord(),
  guessedLetters: [],
  score: 0,
  lifes: LIFES,
  highestScore: JSON.parse(localStorage.getItem('hangman-highest-score')) ?? 0,
  remainingTime: TIME__LIMIT,
  keyHint: null,
  showConfirmModal: false,
  showSettingOptionsModal: false,

  isLogged: false,
  signInUserName: '',
}

const hangmanSlice = createSlice({
  name: 'hangman',
  initialState,
  reducers: {
    updateToGuessWord: (state) => {
      state.toGuessWord = getNewWord()
    },
    addGuessedLetter: (state, action) => {
      state.guessedLetters.push(action.payload)
    },
    resetGuessedLetters: (state) => {
      state.guessedLetters = []
    },
    addScore: (state) => {
      state.score += 1
    },
    resetScore: (state) => {
      state.score = 0
    },
    decreaseLife: (state) => {
      state.lifes -= 1
    },
    resetLifes: (state) => {
      state.lifes = LIFES
    },
    setHighestScore: (state, action) => {
      state.highestScore = action.payload
      localStorage.setItem(
        'hangman-highest-score',
        JSON.stringify(action.payload)
      )
    },
    decreaseRemainingTime: (state) => {
      state.remainingTime -= 1
    },
    resetRemainingTime: (state) => {
      state.remainingTime = TIME__LIMIT
    },
    setKeyHint: (state, action) => {
      state.keyHint = action.payload
    },
    resetKeyHint: (state) => {
      state.keyHint = null
    },
    setShowConfirmModal: (state, action) => {
      state.showConfirmModal = action.payload
    },
    setShowSettingOptionsModal: (state, action) => {
      state.showSettingOptionsModal = action.payload
    },

    setIsLoggedIn: (state, action) => {
      state.isLogged = action.payload
    },

    setSignInUserName: (state, action) => {
      state.signInUserName = action.payload
    },
  },
})

export const hangmanActions = hangmanSlice.actions
export default hangmanSlice
