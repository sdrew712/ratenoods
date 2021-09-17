import React from "react";

export default function PageHeader(props) {
  return (
    <React.Fragment>
      <div className="container body-style-1">
        <h2 className="title-text">{props.titleText}</h2>
      </div>
    </React.Fragment>
  );
}
