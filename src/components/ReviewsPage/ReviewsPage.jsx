import React, { useState, useEffect } from 'react';
import reviewFunctions from "./reviewFunctions"
import Review from './Review';
import Pagination from "./Pagination";
import ReviewsText from "./ReviewsText.json"
import "./reviews.scss"

reviewFunctions();

export default function ReviewsPage() {
  const [posts, setPosts] = useState([]);
  const [error] = useState("");

  useEffect(() => {
    setPosts(ReviewsText)
  }, [posts]);

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {posts.length > 0 ? (
        <>
          <Pagination
            data={posts}
            RenderComponent={Review}
            title="Posts"
            pageLimit={2} //change this to render more pages
            dataLimit={10}
          />
        </>
      ) : (
        <h1>No post to Display!</h1>
      )}
    </div>
  );
}
