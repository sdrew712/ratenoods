import React, { useState, useEffect } from "react";

export default function UpgradesPagination(props) {
  const { data, RenderComponent, pageLimit, dataLimit } = props;

  const pages = 1; //change here if making more pages
  const [currentPage, setCurrentPage] = useState(1); // initially first page
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((prevPage) => prevPage + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((prevPage) => prevPage - 1);
  }

  function changePage(e) {
    const pageNumber = Number(e.target.textContent);
    setCurrentPage(pageNumber);
  }
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };
  // TO show which 5 pages to show
  const getPaginatedGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <div>
      {/*  show 10 posts at a time */}
      <div className="datacontainer">
        {getPaginatedData().map((data, index) => (
          <RenderComponent key={index} data={data} />
        ))}
      </div>
      {/* show the pagiantion
        it consists of next and previous buttons
        along with page numbers
    */}
      <div className="pagination">
        {/* previous button */}
        <button
          onClick={goToPreviousPage}
          className={`pagination-button prev ${
            currentPage === 1 ? "disabled" : ""
          }`}
        >
          prev
        </button>

        {/* show page number */}
        {getPaginatedGroup().map((pageNumber, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`pagination-button paginationItem ${
              currentPage === pageNumber ? "active" : null
            }`}
          >
            <span>{pageNumber}</span>
          </button>
        ))}
        {/* next button */}
        <button
          onClick={goToNextPage}
          className={`pagination-button next ${
            currentPage === pages ? "disabled" : ""
          }`}
        >
          next
        </button>
      </div>
    </div>
  );
}
