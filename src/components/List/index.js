import React from "react";
import Home from "../../pages/Home";

const List = ({ data }) => {
  return (
    <ol>
      {data.map((item) => {
        return <li>{item}</li>;
      })}
    </ol>
  );
};

export default List;
