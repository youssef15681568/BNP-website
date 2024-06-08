import React, {useState, useEffect} from 'react'
import {Link,Routes,Route} from 'react-router-dom'

import GeneralNews from './fetchNewsData/general.jsx'
import EntertainmentNews from './fetchNewsData/entertainment.jsx'
import BusinessNews from './fetchNewsData/business.jsx'
import HealthNews from './fetchNewsData/health.jsx'
import ScienceNews from './fetchNewsData/science.jsx'
import SportsNews from './fetchNewsData/sports.jsx'
import TechnologyNews from './fetchNewsData/technology.jsx'

export default function Home(){
	const [showNavbar, setShowNavbar] = useState(false)
	const [showSearchInputBar, setShowSearchInputBar] = useState(false)
	const [searchInput, setSearchInput] = useState("")

	const handleShowNavbar = (e)=>{
		setShowNavbar(!showNavbar)
		
	}
	useEffect(()=>{
		if(window.scroll){
			setShowNavbar(false)
		}
	},[showNavbar])
	const scrollToTop = ()=>{
			window.scrollTo(0,0)
		}
	
	const showSearchInputBarHandler = ()=>{
		setShowSearchInputBar(!showSearchInputBar)
	}
	const searchInputHandler = (e)=>{
		setSearchInput(e.target.value)
	}

	return (
		<>
		<nav className = "flex justify-between items-center bg-primary h-15 max-sm:hidden">
			<h1 className = "p-2 mx-3 font-roboto font-bold text-2xl text-white hover:text-secondary cursor-pointer transition-colors duration-200"><Link to = "/general">BNP</Link></h1>
			<ul className = "flex justify-between">
				<li className = "nav-style"><Link to = "/general">Home</Link></li>
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
				<button className = "btn-orange mr-1">Sign up</button>
			</div>
		</nav>

		<nav className = "max-sm:bg-primary h-15 hidden 
							max-sm:flex max-sm:flex-col max-sm:items-center max-sm:h-contain">
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
				<ul className = "flex justify-between 
									max-sm:flex max-sm:flex-col">
					<li className = {`relative left-0 nav-style transition-all duration-500 ${showNavbar ? "left-0" : "scale-x-0 opacity-0"}`}>Home</li>
					<li className = {`relative left-0 nav-style transition-all duration-300 ${showNavbar ? "right-0" : "scale-x-0 opacity-0"}`}>Business</li>
					<li className = {`relative left-0 nav-style transition-all duration-500 ${showNavbar ? "left-0" : "scale-x-0 opacity-0"}`}>Health</li>
					<li className = {`relative left-0 nav-style transition-all duration-300 ${showNavbar ? "right-0" : "scale-x-0 opacity-0"}`}>Science</li>
					<li className = {`relative left-0 nav-style transition-all duration-500 ${showNavbar ? "left-0" : "scale-x-0 opacity-0"}`}>Sports</li>
					<li className = {`relative left-0 nav-style transition-all duration-300 ${showNavbar ? "right-0" : "scale-x-0 opacity-0"}`}>Entertainment</li>
					<li className = {`relative left-0 nav-style transition-all duration-500 ${showNavbar ? "left-0" : "scale-x-0 opacity-0"}`}>Technology</li>
				</ul>
				<section className = "flex justify-center w-screen">
					<section className = "flex items-center">
						<button className = {`relative btn-orange mr-1 max-sm:my-2 transition-all duration-500 ${showNavbar ? "w-screen" : "w-screen scale-y-0 opacity-0"}`}>Sign up</button>
					</section>
				</section>
			</div>
		</nav>


		<div className = {`ralative top-0 w-full flex justify-center items-center bg-primary h-10 transition-all duration-300 ease-in-out origin-top ${showSearchInputBar ? "scale-y-100 opacity-100" : "scale-y-0 h-0 opacity-0"}`}>
			<input type = "text" value = {searchInput} onChange = {searchInputHandler} placeholder = "Search for topics"
					className = {`w-80 h-8 p-2 outline-none transition-all duration-500 ${showSearchInputBar ? "" : "translate-x-[-400px]"}`}	
			></input>
			<div className = {`transition-all duration-500 ${showSearchInputBar ? "" : "translate-x-[400px]"}`}>
				<svg className = {`bg-white w-8 h-8 p-1 cursor-pointer hover:fill-secondary transition-all duration-200 ${showSearchInputBar ? "" : "translate-x-[400px]"}`} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
	{/*Search button*/}			<path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
				</svg>
			</div>
		</div>


		<div>
			<Routes>
				<Route exact path = "/general" element = {<GeneralNews/>}/>
				<Route exact path = "/business" element = {<BusinessNews/>}/>
				<Route path = "/health" element = {<HealthNews/>}/>
				<Route path = "/science" element = {<ScienceNews/>}/>
				<Route path = "/sports" element = {<SportsNews/>}/>
				<Route path = "/entertainment" element = {<EntertainmentNews/>}/>
				<Route path = "/technology" element = {<TechnologyNews/>}/>
			</Routes>
		</div>
		

		<footer className = "bg-primary h-85 grid grid-cols-3 p-4">
			<section className = "relative w-full h-full flex justify-center items-center">
				<h1 className = "font-roboto font-bold text-2xl text-white hover:text-primary cursor-pointer transition-all duration-200 ease-out bg-secondary w-20 h-20 rounded-full flex justify-center items-center hover:w-40 hover:h-40 border-transparent border-4 hover:border-solid hover:border-4 hover:border-white absolute object-clip" onClick = {scrollToTop}><Link to = "/general">BNP</Link></h1>
			</section>
			<div className = "flex flex-col items-center w-full">
				<h3 className = "ml-5 text-secondary text-xl select-none font-bold">Categories</h3>
				<ul className = "w-[142px] flex flex-col items-start">
					<li className = "footer-categories-list mb-0" onClick = {scrollToTop}><Link to = "/general">General</Link></li>
					<li className = "footer-categories-list mb-0" onClick = {scrollToTop}><Link to = "/business">Business</Link></li>
					<li className = "footer-categories-list mb-0" onClick = {scrollToTop}><Link to = "/health">Health</Link></li>
					<li className = "footer-categories-list mb-0" onClick = {scrollToTop}><Link to = "/science">Science</Link></li>
					<li className = "footer-categories-list mb-0" onClick = {scrollToTop}><Link to = "/sports">Sports</Link></li>
					<li className = "footer-categories-list mb-0" onClick = {scrollToTop}><Link to = "/entertainment">Entertainment</Link></li>
					<li className = "footer-categories-list mb-0" onClick = {scrollToTop}><Link to = "/technology">Technology</Link></li>
				</ul>
			</div>
			<div className = "flex flex-col items-center justify-center ">
				<h5 className = "text-white font-xl select-none mb-6">Follow us on</h5>
				<ul className = "flex justify-center items-center">
					<li className = "flex justify-center items-center w-20 h-20 p-0 bg-secondary hover:bg-transparent hover:border-4 hover:border-secondary hover:border-solid border-transparent border-4 cursor-pointer transition-all hover:w-24 duration-300">
						<svg className="svg-icon" viewBox="0 0 20 20">
{/*Facebook*/}				<path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
						</svg>
					</li>
					<li className = "flex justify-center items-center w-20 h-20 p-0 bg-secondary hover:bg-transparent hover:border-4 hover:border-secondary hover:border-solid border-transparent border-4 cursor-pointer transition-all hover:w-24 duration-300">
						<svg className="svg-icon" viewBox="0 0 20 20">
							<path fill="none" d="M14.52,2.469H5.482c-1.664,0-3.013,1.349-3.013,3.013v9.038c0,1.662,1.349,3.012,3.013,3.012h9.038c1.662,0,3.012-1.35,3.012-3.012V5.482C17.531,3.818,16.182,2.469,14.52,2.469 M13.012,4.729h2.26v2.259h-2.26V4.729z M10,6.988c1.664,0,3.012,1.349,3.012,3.012c0,1.664-1.348,3.013-3.012,3.013c-1.664,0-3.012-1.349-3.012-3.013C6.988,8.336,8.336,6.988,10,6.988 M16.025,14.52c0,0.831-0.676,1.506-1.506,1.506H5.482c-0.831,0-1.507-0.675-1.507-1.506V9.247h1.583C5.516,9.494,5.482,9.743,5.482,10c0,2.497,2.023,4.52,4.518,4.52c2.494,0,4.52-2.022,4.52-4.52c0-0.257-0.035-0.506-0.076-0.753h1.582V14.52z"></path>
						</svg>
					</li>
					
					<li className = "flex justify-center items-center w-20 h-20 p-0 bg-secondary hover:bg-transparent hover:border-4 hover:border-secondary hover:border-solid border-transparent border-4 cursor-pointer transition-all hover:w-24 duration-300">
						<svg className="svg-icon " viewBox="0 0 20 20">
							<path fill="none" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
						</svg>
					</li>
					<li className = "flex justify-center items-center w-20 h-20 p-0 bg-secondary hover:bg-transparent hover:border-4 hover:border-secondary hover:border-solid border-transparent border-4 cursor-pointer transition-all hover:w-24 duration-300">
						<svg className="svg-icon " viewBox="0 0 20 20">
							<path fill="none" d="M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003"></path>
						</svg>
					</li>
				</ul>
			</div>
			
		</footer>
		<section className ="bg-primary w-full h-5 flex justify-center items-center">
				<div className = "text-primary hover:text-secondary text-[0.5rem]">Made by : <span>Joseph</span></div>
		</section>
		</>




	)
}