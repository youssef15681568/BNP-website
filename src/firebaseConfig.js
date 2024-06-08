import {initializeApp} from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDf2ZrgEqgzkmcQrqch9q-q_qfpVRCjs4w",
  authDomain: "bnp-news.firebaseapp.com",
  projectId: "bnp-news",
  storageBucket: "bnp-news.appspot.com",
  messagingSenderId: "964717485544",
  appId: "1:964717485544:web:362ab3fec9e267cae2585d"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification}

