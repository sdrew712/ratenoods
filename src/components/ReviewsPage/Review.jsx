import React from "react";
import "./reviews.scss";


export default function Review(props){
    return(
        <div className={props.className}>
          <p className="date">{props.date}</p>

          <div className="review-container">
            <div className="review-text-container">
            <h2 className="review-h2">{props.noodleName}</h2>
              <p className="rating">{props.rating}</p>
              <p className="noodle-text">{props.bodyText}</p>
           </div>   
            <div className="button-container">
              <button type="button" className="review-button">Read more</button>
            </div>   

            <div className="img-container">
              <img src={props.noodleImg} alt="noodle_img" className="noodle-img"/>
            </div>
          </div>
        </div>     
    );
  }