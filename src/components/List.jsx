import React from "react";

const List = ({ values, name, sortFn }) => {
  const orderedValues = sortFn ? values.sort(sortFn) : values;

  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {orderedValues.map((v, i) => (
          <li key={v.id}>{v.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
