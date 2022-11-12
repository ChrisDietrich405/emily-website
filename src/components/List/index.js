import React from "react";
import Home from "../../pages/Home";

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
