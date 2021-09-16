import React from "react";
import "./home-body.scss";
import Meal from "./meal.jpg";
import { Link } from "react-router-dom";

export default function Homebody2(props) {
  return (
    <>
      <div className={props.className}>
        <div className="container">
          <h2 className="bottom-padding-container">{props.headerText}</h2>
          <p>{props.bodyText}</p>
          <Link to={props.link}>
            <button type="button">{props.buttonText}</button>
          </Link>
        </div>
        <img src={Meal} alt="tasty_meal" className="meal-img" />
      </div>
    </>
  );
}
