import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/homePage'
import Signin from './pages/auth/signInForm' 
import Signup from './pages/auth/signUpForm'
import {BrowserRouter, Router} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
        <Home/>
    </BrowserRouter>
  </React.StrictMode>,
)
