import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/homePage'
import Signin from './pages/auth/signInForm' 
import Signup from './pages/auth/signUpForm' 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Home/> */}
    {/* <Signin/> */}
    <Signup/>
  </React.StrictMode>,
)
