import React, { useState, useEffect } from "react";
import PageHeader from "../PageHeader/PageHeader";
import UpgradesText from "./UpgradesText.json";
import UpgradesPagination from "./UpgradesPagination";
import Upgrade from "./Upgrade";

export default function UpgradesPage() {
  const [posts, setPosts] = useState([]);
  const [error] = useState("");

  useEffect(() => {
    setPosts(UpgradesText);
  }, [posts]);

  if (error) return <h1>{error}</h1>;

  return (
    <React.Fragment>
      <PageHeader titleText="Upgrade your noodles" />
      {posts.length > 0 ? (
        <React.Fragment>
          <UpgradesPagination
            data={posts}
            RenderComponent={Upgrade}
            title="Posts"
            pageLimit={1} //change this to render more pages
            dataLimit={10}
          />
        </React.Fragment>
      ) : (
        <h1>No post to Display!</h1>
      )}
    </React.Fragment>
  );
}
