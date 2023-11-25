import React, { useState, useEffect } from "react";
import fetchData from "../fetchData";
import Card from "./Card";
import Pagination from "./Pagination";
const Container = () => {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const items_per_page = 2;
  const totalPageCount = Math.ceil(items.length / items_per_page);
  const startingIndex = (currentPage - 1) * items_per_page;
  const endingIndex = currentPage * items_per_page;
  const data = items.slice(startingIndex, endingIndex);
  useEffect(() => {
    fetchData().then((res) => {
      console.log(res);
      setItems(res);
    });
  }, []);

  return (
    <div className="container">
      {data.map((ele) => {
        const { price, thumbnail, description, title } = ele;
        return (
          <Card
            price={price}
            image={thumbnail}
            description={description}
            title={title}
          />
        );
      })}
      <Pagination
        setCurrentPage={setCurrentPage}
        totalPageCount={totalPageCount}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Container;
