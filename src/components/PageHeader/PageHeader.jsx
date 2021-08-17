import React from "react";

export default function PageHeader(props){
    return(
      <>
        <div className="container">
          <h2>{props.titleText}</h2>
        </div>         
      </>
    );
  }