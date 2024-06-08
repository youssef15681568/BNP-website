import React, {useState, useEffect} from 'react'
import {TypeAnimation} from 'react-type-animation'

export default function ScienceNews(){
	const API_KEY = "27894f3c50e642aa9d87cb06cf1d41f6"

	const [data, setData] = useState({})
	const [loading, setLoading] = useState(true)

	useEffect(()=>{
		fetch(`https://newsapi.org/v2/top-headlines?category=science&country=us&apiKey=${API_KEY}`)
			.then((res)=>{

				if(!res.ok){
					throw new Error("Fetching data failed!!")
				}
				return res.json()

				
			})
			.then((data)=>{
				setLoading(false)
				setData(data)
				console.log(data)
				
			})
			.catch((e)=>{
				setLoading(false)
				console.error(`The following Error occured ${e}`)
				
			})


	},[])

	if(loading){
		return(
		<div className = "w-screen h-screen flex-col flex justify-center items-center">
			<img src = "icons8-loading-50.png" alt = "loading" width = "40" className = "animate-spin m-2"/>

			<TypeAnimation
				sequence = {[
					"loading news ...", 
					1000,
					"", 
					1000
					]}
				wrapper = "span"
				speed = {150}
				deletionSpeed = {200}
				className = "text-secondary font-bold"
				repeat = {Infinity}
			/>
		</div>
		)
	}

	return(
		<>
			<h1 className = "text-white shadow-xl bg-primary p-2 flex justify-center items-center h-10 font-bold mt-5">Science News</h1>
			<ul  className = " grid grid-cols-3 max-sm:grid-cols-1 mt-5 ">
				{data.articles?.map((item,index)=>{
					return(
						<div className = {`flex flex-col justify-between m-2 border-solid border-4 border-primary`}>
								<li className = " bg-primary text-white p-2 m-2 h-contain text-xl font-bold " key = {index}>{item.title}</li>
								<li className = " p-2 h-contain" key = {index + 1}><span className = "text-secondary font-bold font-martian text-xl">Summary : </span>{item.description}</li>
								<section className = "w-full flex justify-center w-full h-[200px] overflow-hidden">
									<img className = "bg-primary transition-all duration-400 ease-in-out object-cover w-full h-[200px] hover:h-[250px] flex self-center justify-self-center hover:brightness-50" src = {item.urlToImage} alt={item.title}/>
								</section>
								<li className = "p-2 text-justify" key = {index + 2}>{item.content}</li>
								<section className = "flex w-full justify-between">
									<li className = " p-2 h-contain" key = {index + 5}>{item.source.name}</li>
									<vr/>
									<li className = " p-2 h-contain" key = {index + 4}>{item.publishedAt}</li>
								</section>
								

								<li className = " w-full text-end p-4 h-contain font-martian" key = {index + 3}><span className = "font-bold text-primary">Author : </span>{item.author}</li>
		
								<button className = "btn-orange bg-primary hover:text-white hover:bg-secondary text-nowrap w-full "><a href={item.url}>See full article</a></button>
		
						</div>
								
					)
				})}
			</ul>
		</>
	)
}