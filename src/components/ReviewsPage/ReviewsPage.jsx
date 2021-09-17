import React, { useState, useEffect } from "react";
import reviewFunctions from "./reviewFunctions";
import Review from "./Review";
import PageHeader from "../PageHeader/PageHeader";
import ReviewsPagination from "./ReviewsPagination";
import ReviewsText from "./ReviewsText.json";
import "./reviews.scss";

reviewFunctions();

export default function ReviewsPage() {
  const [posts, setPosts] = useState([]);
  const [error] = useState("");

  useEffect(() => {
    setPosts(ReviewsText);
  }, [posts]);

  if (error) return <h1>{error}</h1>;

  return (
    <React.Fragment>
      <PageHeader titleText="Instant Noodle Reviews" />
      {posts.length > 0 ? (
        <React.Fragment>
          <ReviewsPagination
            data={posts}
            RenderComponent={Review}
            title="Posts"
            pageLimit={2} //change this to render more pages
            dataLimit={10}
          />
        </React.Fragment>
      ) : (
        <h1>No post to Display!</h1>
      )}
    </React.Fragment>
  );
}
