import React from "react";
import "./reviews.scss";


export default function Review(props){
    return(
      <>
        <div className={props.className}>
          <p>{props.date}</p>
          <h2 className="bottom-padding-container">{props.noodleName}</h2>
          <p>{props.rating}</p>
          <p>{props.bodyText}</p>
          <button type="button">Read more</button>
        </div>         
      </>
    );
  }