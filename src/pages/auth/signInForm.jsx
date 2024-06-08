import React, {useState} from 'react'
import {Routes, Route, Link, useNavigate} from 'react-router-dom'
import Home from '../homePage'
import Signup from './signUpForm'

import {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification} from "../../firebaseConfig.js"

export default function Signin(){
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	const emailInputHandler = (e)=>{
		setEmail(e.target.value)
	}
	const passwordInputHandler = (e)=>{
		setPassword(e.target.value)
	}

	const handleSubmit = async (e)=>{
		e.preventDefault()
		try{
			const userCredential = await signInWithEmailAndPassword(auth, email, password)

			if (!userCredential.user.emailVerified){
				setError("Email not verified. Please check your inbox...")
				return
			}
			{<p>welcome {userCredential.displayName}</p>}
			console.log("User signed in : ", userCredential.user)
			console.log("welcome", userCredential.user.displayName)
			navigate('*')

		}catch(error){
			setError(error.message)
		}
	}
	return(

		<div className = "flex w-screen h-screen justify-center items-center 
							max-sm:items-center max-sm:w-screen max-sm:h-full">
			<div className = "bg-primary flex flex-col items-center justify-center w-[400px] h-[550px] 
								max-sm:w-screen max-sm:h-[900px]">
				<div className = "flex flex-col items-center mb-10
									max-sm:my-10">
					<h1 className = "font-roboto text-white hover:text-secondary cursor-pointer text-4xl font-bold transition-colors duration-200
										max-sm:active:text-secondary max-sm:hover:text-white"><Link to = "/general">BNP</Link></h1>
					<span className = 'flex items-center'>
						<hr className = "w-20 max-sm:w-40"/>
							<h4 className = "font-light text-nowrap text-xl text-white hover:text-white select-none px-3">Sign-in</h4>
						<hr className = " w-20 max-sm:w-40"/>
					</span>
				</div>
				<div className = "flex flex-col items-start
									max-sm:items-center ">
					{error && <p className = "text-white w-80 font-bold mt-0 mb-2">{error}</p>}
					<form onSubmit = {handleSubmit}>

						<div className = "flex flex-col">
							<input  type = "text" placeholder = "Email address" name="email" 
							value = {email} onChange = {emailInputHandler}
							className = "w-80 h-10 p-4 placeholder:text-slate-500 placeholder:hover:text-slate-400 mb-2
							max-sm:w-72 max-sm:focus:outline-none"
							></input>
							<input  type = "password" placeholder = "Password" name="email" 
							value = {password} onChange = {passwordInputHandler}
							className = "w-80 h-10 p-4 placeholder:text-slate-500 placeholder:hover:text-slate-400 mb-2
							max-sm:w-72 max-sm:focus:outline-none"
							></input>
						</div>
						<p className = "hover:underline text-white cursor-pointer
										max-sm:active:underline max-sm:hover:no-underline">Forgot password?</p>
						<input type = "submit" value = "Sign in"
						className = "btn-orange w-full mt-2"
						></input>
						<p className = "my-2 text-white max-sm:mt-4">Don't have an account yet? <span className = "text-white hover:text-secondary hover:underline cursor-pointer transition-colors duration-200 max-sm:hover:text-white max-sm:hover:no-underline max-sm:active:text-secondary max-sm:active:underline "><Link to = "/sign-up">sign-up</Link></span> now.</p>
					</form>
					
					<div className = "w-full flex justify-center items-center flex-col">
						<span className = 'flex items-center'>
							<hr className = "fill-green-500 w-32 max-sm:w-40"/>
								<h4 className = "font-light text-xl text-white p hover:text-white select-none px-3 ">or</h4>
							<hr className = "fill-green-500 w-32 max-sm:w-40"/>
						</span>
						<div className = "mt-2
											max-sm:flex max-sm:flex-col max-sm:items-center">
							<div className = "flex items-center bg-white p-2 mt-2 cursor-pointer w-full hover:text-primary grayscale hover:grayscale-0 transition-all duration-200 active:brightness-50
												max-sm:w-[290px] max-sm:grayscale-0 max-sm:active:brightness-50">
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
									<path  fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
								</svg>
								<p className = "m-2 text-[#e53935] select-none
													max-sm:mx-4">Sign-in with your Google account.</p>
							</div>
							<div className = "flex items-center bg-white p-2 mt-2 cursor-pointer w-full hover:text-primary grayscale hover:grayscale-0 transition-colors duration-200 active:brightness-50
												max-sm:w-[290px] max-sm:grayscale-0 max-sm:active:brightness-50">
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
									<linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
								</svg>
								<p className = "m-2 text-[#007ad9] select-none
													max-sm:mx-4">Sign-in with your Facebook account.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Routes>
				<Route path = "/general" element = {<Home/>}/>
				<Route path = "/sign-up" element = {<Signup/>}/>
			</Routes>
		</div>
	)
}