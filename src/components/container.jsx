import React, { useState, useEffect, useCallback, useRef } from "react";
import fetchData from "../fetchData";
// import { FiCommand } from "react-icons/fi";
import { Audio } from "react-loader-spinner";
import "./components.css";
// import Card from "./Card";
// import Pagination from "./Pagination";
const Container = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const limit = 10;
  const lastElementRef = useRef(null);
  console.log(lastElementRef);
  const handleObserver = ([entry]) => {
    const { isIntersecting } = entry;
    if (isIntersecting && currentPage < limit) {
      setCurrentPage(currentPage + 1);
    }
  };
  useEffect(() => {
    fetchData(currentPage, limit, setLoading).then((res) => {
      setItems((prev) => [...prev, ...res]);
    });
  }, [currentPage]);
  // useEffect(() => {
  //   fetchData().then((res) => {
  //     console.log(res);
  //     setItems(res);
  //   });
  // }, []);the commented code is for pagination

  // const items_per_page = 2;
  // const totalPageCount = Math.ceil(items.length / items_per_page);
  // const startingIndex = (currentPage - 1) * items_per_page;
  // const endingIndex = currentPage * items_per_page;
  // const data = items.slice(startingIndex, endingIndex);
  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver);
    if (lastElementRef && lastElementRef.current) {
      observer.observe(lastElementRef.current);
    }
    console.log("i am called");
    return () => {
      const currentElement = lastElementRef.current;
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [lastElementRef && lastElementRef.current]);
  // const fetchMoreData = async () => {
  //   const newData = await fetchData(currentPage, limit, setLoading);
  //   setItems((prevItems) => [...prevItems, ...newData]);
  //   // setCurrentPage((prevPage) => prevPage + 1);
  // };
  // useEffect(() => {
  //   fetchMoreData();
  // }, [currentPage]);
  // useEffect(() => {
  // Function to fetch data based on the page number

  // Event listener for scrolling
  //   const handleScroll = () => {
  //     console.log(
  //       document.documentElement.scrollHeight,
  //       window.scrollY,
  //       window.innerHeight
  //     );
  //     if (
  //       window.scrollY + window.innerHeight >=
  //       document.documentElement.scrollHeight
  //     ) {
  //       console.log(currentPage);
  //       setCurrentPage((prev) => (prev === 10 ? prev : prev + 1));
  //     }
  //   };
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <div className="container">
        {items.map((ele, index) => {
          const { price, thumbnail, description, title } = ele;
          return !(items.length === index + 1) ? (
            <div className="cardClass">
              <h1 className="description">title : {title}</h1>
              <img src={thumbnail} alt="" />
              <h1 className="description">description : {description}</h1>
              <h1>price :{price}</h1>
            </div>
          ) : (
            <div className="cardClass" ref={lastElementRef}>
              <h1 className="description">title : {title}</h1>
              <img src={thumbnail} alt="" />
              <h1 className="description">description : {description}</h1>
              <h1>price :{price}</h1>
            </div>
          );
        })}

        {/* <Pagination
        setCurrentPage={setCurrentPage}
        totalPageCount={totalPageCount}
        currentPage={currentPage}
      /> */}
        {/* <div ref={lastElementRef}></div> */}
      </div>
      {loading && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass="wrapperClass"
        />
      )}
    </>
  );
};

export default Container;
