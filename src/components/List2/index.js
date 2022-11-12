import React from "react";

const List2 = ({ data }) => {
  return (
    <ol>
      {data.map((item) => {
        return <li>{item}</li>;
      })}
    </ol>
  );
};

export default List2;
