import React from "react";

const List = ({ data, ordered }) => {
  const handleList = () => {
    if (ordered === true) {
      return (
        <ol>
          {data.map((item) => {
            return <li>{item}</li>;
          })}
        </ol>
      );
    } else {
      return (
        <ul>
          {data.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      );
    }
  };

  handleList()
};

export default List;
