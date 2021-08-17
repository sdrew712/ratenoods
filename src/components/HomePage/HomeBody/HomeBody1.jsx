import React from "react";
import "./home-body.scss";


export default function Homebody1(props){
    return(
      <>
        <div className="homebody-1">
          <div className="container">
            <h2>{props.headerText}</h2>
            <p className="body-text">{props.bodyText}</p>
            <button type="button">{props.buttonText}</button>
          </div>
        </div>            
      </>
    );
  }