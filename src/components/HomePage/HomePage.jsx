import React from "react";
import Panda from "../panda.png"
import Homebody1 from "./HomeBody/HomeBody1";
import Homebody2 from "./HomeBody/HomeBody2";
import "./home-page.scss"

export default function HomePage(){
	return(
		<>
		<div className="header div-component">
			<img className="panda" src={Panda} alt="panda_eating_noodles" />    
			<div className="header-text-container">                            
				<h1>Rate Noods</h1>
				<h3 className="bottom-text">Your one stop for everything instant noodles.</h3>
			</div>
		</div>
		<Homebody1
		headerText="Hello!"
		bodyText="I’m an instant noodle addict aspiring to try as many noodles as possible."
		buttonText="See my noodle reviews"/>

		<Homebody2
		headerText="Goodbye plain noodles!"
		bodyText="Want to learn how to make your noodles more of a meal?"
		buttonText="Upgrade your noodles"/>

		<Homebody1
		headerText="About me"
		bodyText="Who am I? What is this?"
		buttonText="Visit about page"/>
		</>
    )
}