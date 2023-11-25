import React from "react";

const Pagination = ({ currentPage, setCurrentPage, totalPageCount }) => {
  const onPrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const onNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={onPrevious} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={onNext} disabled={currentPage === totalPageCount}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
