import React from "react";
import "./components.css";
const Card = ({ title, image, description, price }) => {
  return (
    <div className="cardClass">
      <h1>title : {title}</h1>
      <img src={image} alt="" />
      <h1>description : {description}</h1>
      <h1>price :{price}</h1>
    </div>
  );
};

export default Card;
