import React from "react";

import "../global.css";
import "./styles.css";
import hearthImg from "../assets/hearth.svg";

const Card = ({ date,title,children }) => {
  return (
    <div className="card-container">
      <p>{date}</p>
      <h1>{title}</h1>
      <img src={hearthImg} alt="hearth" />
      <p>{children}</p>
    </div>
  );
};

export default Card;
