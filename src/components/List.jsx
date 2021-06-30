import React from "react";

const List = ({ values, name, sortFn }) => {
  const orderedValues = sortFn ? values.sort(sortFn) : values;
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {orderedValues.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
