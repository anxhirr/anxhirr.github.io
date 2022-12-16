import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBITTmykjz2B02mo3TtBXAsdJ-8uaSJ_lo',
  authDomain: 'hangman-34311.firebaseapp.com',
  projectId: 'hangman-34311',
  storageBucket: 'hangman-34311.appspot.com',
  messagingSenderId: '278635611371',
  appId: '1:278635611371:web:0d634aaa351dacc52b2aae',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => signInWithPopup(auth, provider)
