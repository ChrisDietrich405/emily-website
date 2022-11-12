import React from "react";

const List = ({ data }) => {
  return (
    <ul>
      {data.map((item) => {
        return <li>{item}</li>;
      })}
    </ul>
  );
};

export default List;
