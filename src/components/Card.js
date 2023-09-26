import React from "react";
import "./Card.css";

export default function Card({ id, name, email }) {
  //   const  { id, name, email } = props;
  return (
    <div className="card grow">
      <img src={`https://robohash.org/${id}?200x200`} alt="robo-portrait" />
      <div className="card-text">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
