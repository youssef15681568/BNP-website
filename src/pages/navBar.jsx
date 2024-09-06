import React, {useState} from "react";
import {Link, Routes, Route} from 'react-router-dom'

import GeneralNews from './fetchNewsData/general.jsx'
import EntertainmentNews from './fetchNewsData/entertainment.jsx'
import BusinessNews from './fetchNewsData/business.jsx'
import HealthNews from './fetchNewsData/health.jsx'
import ScienceNews from './fetchNewsData/science.jsx'
import SportsNews from './fetchNewsData/sports.jsx'
import TechnologyNews from './fetchNewsData/technology.jsx'

import Signin from "./auth/signInForm.jsx";
import Signup from "./auth/signUpForm.jsx";

export default function NavBar(){
        const [showNavbar, setShowNavbar] = useState(false)
        const [showSearchInputBar, setShowSearchInputBar] = useState(false)
        const [searchInput, setSearchInput] = useState("")
        const showSearchInputBarHandler = ()=>{
            setShowSearchInputBar(!showSearchInputBar)
        }
        const searchInputHandler = (e)=>{
            setSearchInput(e.target.value)
        }

        const handleShowNavbar = (e)=>{
            setShowNavbar(!showNavbar)
        }

        const handleMobileNavbarClick = (e) =>{
            setShowNavbar(false)
        }
    return(
        
        <>
            <nav className = "flex justify-between items-center bg-primary h-15 max-sm:hidden">
				<h1 className = "p-2 mx-3 font-roboto font-bold text-2xl text-white hover:text-secondary cursor-pointer transition-colors duration-200"><Link to = "/general">BNP</Link></h1>
				<ul className = "flex justify-between">
					<li className = "nav-style"><Link to = "/">Home</Link></li>
					<li className = "nav-style"><Link to = "/business">Business</Link></li>
					<li className = "nav-style"><Link to = "/health">Health</Link></li>
					<li className = "nav-style"><Link to = "/science">Science</Link></li>
					<li className = "nav-style"><Link to = "/sports">Sports</Link></li>
					<li className = "nav-style"><Link to = "/entertainment">Entertainment</Link></li>
					<li className = "nav-style"><Link to = "/technology">Technology</Link></li>
				</ul>
				<div className = "flex items-center">
					<button className = "fill-white hover:fill-secondary p-2 text-white font bold mx-3 transition-colors duration-200"
							onClick = {showSearchInputBarHandler}>
						<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
	{/*Search button*/}		<path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
						</svg>
					</button>
					<button className = "btn-orange mr-1"><Link to = "sign-in">Sign in</Link></button>
				</div>
			</nav>

			{/* Phone Navbar */}
			<nav className = "max-sm:bg-primary h-15 hidden max-sm:flex max-sm:flex-col max-sm:items-center max-sm:h-contain">
				<div className = "w-full">
					<div className = "flex items-center justify-between">
						<h1 className = "p-2 mx-3 font-roboto font-bold text-2xl text-white hover:text-secondary cursor-pointer transition-colors duration-200">BNP</h1>
						<section className = "flex items-center mr-2">
							<button className = "fill-white hover:fill-secondary p-2 text-white font bold mx-3 transition-colors duration-200">
									<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
	{/*Search button*/}						<path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
									</svg>
							</button>
							<button className = "fill-white hover:fill-secondary p-2 text-white font bold mx-3 transition-colors duration-200"
									onClick = {handleShowNavbar}>
									<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="40" viewBox="0 0 50 50">
										<path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
									</svg>
							</button>
						</section>
					</div>
				</div>
				<div className = {`fixed z-100  transition-all duration-500 ${showNavbar ? "top-[56px] backdrop-blur" : "top-[56px] pointer-events-none "}`}>
					<ul className = "flex justify-between max-sm:flex max-sm:flex-col">
						<Link onClick = {handleMobileNavbarClick} to = "/"><li className = {`relative left-0 nav-style transition-all duration-500 ${showNavbar ? "left-0" : "scale-x-0 opacity-0"}`}>Home</li></Link>
						<Link onClick = {handleMobileNavbarClick} to = "/business"><li className = {`relative left-0 nav-style transition-all duration-300 ${showNavbar ? "right-0" : "scale-x-0 opacity-0"}`}>Business</li></Link>
						<Link onClick = {handleMobileNavbarClick} to = "/health"><li className = {`relative left-0 nav-style transition-all duration-500 ${showNavbar ? "left-0" : "scale-x-0 opacity-0"}`}>Health</li></Link>
						<Link onClick = {handleMobileNavbarClick} to = "/science"><li className = {`relative left-0 nav-style transition-all duration-300 ${showNavbar ? "right-0" : "scale-x-0 opacity-0"}`}>Science</li></Link>
						<Link onClick = {handleMobileNavbarClick} to = "/sports"><li className = {`relative left-0 nav-style transition-all duration-500 ${showNavbar ? "left-0" : "scale-x-0 opacity-0"}`}>Sports</li></Link>
						<Link onClick = {handleMobileNavbarClick} to = "/entertainment"><li className = {`relative left-0 nav-style transition-all duration-300 ${showNavbar ? "right-0" : "scale-x-0 opacity-0"}`}>Entertainment</li></Link>
						<Link onClick = {handleMobileNavbarClick} to = "/technology"><li className = {`relative left-0 nav-style transition-all duration-500 ${showNavbar ? "left-0" : "scale-x-0 opacity-0"}`}>Technology</li></Link>
					</ul>
					<section className = "flex justify-center w-screen">
						<section className = "flex items-center">
							<Link onClick = {handleMobileNavbarClick} to = "sign-in"><button className = {`relative btn-orange mr-1 max-sm:my-2 transition-all duration-500 ${showNavbar ? "w-screen" : "w-screen scale-y-0 opacity-0"}`}>Sign up</button></Link>
						</section>
					</section>
				</div>
				
			</nav>
            <div className = {`ralative top-0 w-full flex justify-center items-center bg-primary h-10 transition-all duration-300 ease-in-out origin-top ${showSearchInputBar ? "scale-y-100 opacity-100" : "scale-y-0 h-0 opacity-0"}`}>
				<input type = "text" value = {searchInput} onChange = {searchInputHandler} placeholder = "Search for topics" className = {`w-80 h-8 p-2 outline-none transition-all duration-500 ${showSearchInputBar ? "" : "translate-x-[-400px]"}`}	
				></input>
				<div className = {`transition-all duration-500 ${showSearchInputBar ? "" : "translate-x-[400px]"}`}>
					<svg className = {`bg-white w-8 h-8 p-1 cursor-pointer hover:fill-secondary transition-all duration-200 ${showSearchInputBar ? "" : "translate-x-[400px]"}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
		{/*Search button*/}			<path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
					</svg>
				</div>
			</div>
		
			<div>
				<Routes>
					<Route path = "/" element = {<GeneralNews/>}/>
					<Route path = "/business" element = {<BusinessNews/>}/>
					<Route path = "/health" element = {<HealthNews/>}/>
					<Route path = "/science" element = {<ScienceNews/>}/>
					<Route path = "/sports" element = {<SportsNews/>}/>
					<Route path = "/entertainment" element = {<EntertainmentNews/>}/>
					<Route path = "/technology" element = {<TechnologyNews/>}/>
					<Route path = "/sign-in" element = {<Signin/>}/>
					<Route path = "/sign-up" element = {<Signup/>}/>
				</Routes>
			</div>
        </>
    )
}