import React, { useState, useEffect } from "react";
import Review from "./Review";
import PageHeader from "../PageHeader/PageHeader";
import ReviewsPagination from "./ReviewsPagination";
import ReviewsText from "./ReviewsText.json";
import "./reviews.scss";

export default function ReviewsPage() {
  const [posts, setPosts] = useState([]);
  const [error] = useState("");

  const reviewFunction = () => {
    let postTextContainer = document.getElementsByClassName(
      "post-text-container"
    );
    let buttonContainer = document.getElementsByClassName("button-container");

    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (mediaQuery.matches) {
      for (let i = 0; i < postTextContainer.length; i++) {
        postTextContainer[i].append(buttonContainer[i]);
      }
    }
  };

  useEffect(() => {
    reviewFunction();
  });

  useEffect(() => {
    setPosts(ReviewsText);
  }, [posts]);

  if (error) return <h1>{error}</h1>;

  return (
    <React.Fragment>
      <PageHeader titleText="Instant Noodle Reviews" />
      <React.Fragment>
        <ReviewsPagination
          data={posts}
          RenderComponent={Review}
          title="Posts"
          pageLimit={2} //change this to render more pages
          dataLimit={10}
        />
      </React.Fragment>
    </React.Fragment>
  );
}
