import React from 'react'

export default function Home(){
	return (
		<nav className = "flex justify-between items-center bg-primary h-15">
			<h1 className = "p-2 mx-3 font-roboto font-bold text-2xl text-white hover:text-secondary cursor-pointer transition-colors duration-200">BNP</h1>
			<ul className = "flex justify-between">
				<li className = "nav-style">General</li>
				<li className = "nav-style">Business</li>
				<li className = "nav-style">Health</li>
				<li className = "nav-style">Science</li>
				<li className = "nav-style">Sports</li>
				<li className = "nav-style">Entertainment</li>
				<li className = "nav-style">Technology</li>
			</ul>
			<div className = "flex items-center">
				<button className = "fill-white hover:fill-secondary p-2 text-white font bold mx-3 transition-colors duration-200">
					<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
						<path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z"></path>
					</svg>
				</button>
				<button className = "btn-orange mr-1">Sign up</button>
			</div>



		</nav>

	)
}