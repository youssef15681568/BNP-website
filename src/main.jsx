import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/homePage'
import NavBar from './pages/navBar.jsx'
import Signin from './pages/auth/signInForm' 
import Signup from './pages/auth/signUpForm'

import GeneralNews from './pages/fetchNewsData/general.jsx'
import EntertainmentNews from './pages/fetchNewsData/entertainment.jsx'
import BusinessNews from './pages/fetchNewsData/business.jsx'
import HealthNews from './pages/fetchNewsData/health.jsx'
import ScienceNews from './pages/fetchNewsData/science.jsx'
import SportsNews from './pages/fetchNewsData/sports.jsx'
import TechnologyNews from './pages/fetchNewsData/technology.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/BNP-website">
        <NavBar/>
        <Routes>
            <Route index element={<Home/>}/>
            <Route path = "/business" element = {<BusinessNews/>} />
            <Route path = "/health" element = {<BusinessNews/>} />
            <Route path = "/science" element = {<BusinessNews/>} />
            <Route path = "/sports" element = {<BusinessNews/>} />
            <Route path = "/entertainment" element = {<BusinessNews/>} />
            <Route path = "/technology" element = {<BusinessNews/>} />

        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
