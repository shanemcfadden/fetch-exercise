import React from "react";

const List = ({ values, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {values.map((v, i) => (
          <li key={v.id}>{v.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
