import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import Review from "./Review";
import ReviewsText from "./ReviewsText";
import maruchanChicken from "./noodleImages/maruchan-chicken.jpg"
import indomieChicken from "./noodleImages/indomie-chicken-curry.jpg"
import appendButton from "./appendButton";

appendButton();

export default function ReviewsPage(){
  return(
    <>
      <PageHeader titleText="Noodle reviews" />
      <Review
        className = "review-style-2"
        date = {ReviewsText[0].date}
        noodleName = {ReviewsText[0].noodleName}
        rating = {ReviewsText[0].rating}
        bodyText = {ReviewsText[0].bodyText}
        noodleImg = {maruchanChicken}
      />
      <Review
        className = "review-style-1"
        date = {ReviewsText[1].date}
        noodleName = {ReviewsText[1].noodleName}
        rating = {ReviewsText[1].rating}
        bodyText = {ReviewsText[1].bodyText}
        noodleImg = {indomieChicken}
      />
    </>
  );
}