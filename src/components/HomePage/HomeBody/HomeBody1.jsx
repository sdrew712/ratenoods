import React from "react";
import "./home-body.scss";
import { Link } from "react-router-dom";


export default function Homebody1(props){
    return(
      <>
        <div className={props.className}>
          <div className="container">
            <h2 className="bottom-padding-container">{props.headerText}</h2>
            <p className="bottom-padding-container">{props.bodyText}</p>
            <div className="home-button-container">
              <Link to={props.link} className="button">{props.buttonText}</Link>
            </div>
          </div>
        </div>            
      </>
    );
  }