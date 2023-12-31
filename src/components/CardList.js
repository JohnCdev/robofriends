import React from "react";
import Card from "./Card";

export default function CardList({ robots }) {
  // if (true) {
  //   throw new Error("It's an error");
  // }
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
}
