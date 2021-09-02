import React from "react";
import "./home-body.scss";
import { Link } from "react-router-dom";


export default function Homebody1(props){
    return(
      <>
        <div className={props.className}>
          <div className="container">
            <h2 className="bottom-padding-container">{props.headerText}</h2>
            <p>{props.bodyText}</p>
            <Link to={props.link}>
              <button type="button">
                {props.buttonText}
              </button>
            </Link>
          </div>
        </div>            
      </>
    );
  }