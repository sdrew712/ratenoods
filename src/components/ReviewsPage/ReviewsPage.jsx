import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import Review from "./Review";
import ReviewsText from "./ReviewsText";

export default function ReviewsPage(){
  return(
    <>
      <PageHeader titleText="Noodle reviews" />
      <Review
        className = "container"
        date = {ReviewsText[0].date}
        noodleName = {ReviewsText[0].noodleName}
        rating = {ReviewsText[0].rating}
        bodyText = {ReviewsText[0].bodyText}
      />
    </>
  );
}