import React from "react";
import "./home-body.scss";
import Meal from "./meal.jpg"

export default function Homebody2(props){
    return(
      <>
        <div className="body-style-2">
          <div className="container">
            <h2 className="h2-padding-container">{props.headerText}</h2>
            <p>{props.bodyText}</p>
            <button type="button">{props.buttonText}</button>
          </div>
          <img src={Meal} alt="tasty_meal" className="meal-img" />
        </div>  
      </>
    );
  }