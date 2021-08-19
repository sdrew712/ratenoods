import React from "react";
import "./home-body.scss";


export default function Homebody1(props){
    return(
      <>
        <div className="body-style-1">
          <div className="container">
            <h2 className="bottom-padding-container">{props.headerText}</h2>
            <p>{props.bodyText}</p>
            <button type="button">{props.buttonText}</button>
          </div>
        </div>            
      </>
    );
  }