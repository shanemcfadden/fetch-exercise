import React from "react";
import PropTypes from "prop-types";

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

List.propTypes = {
  name: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  sortFun: PropTypes.func,
};

export default List;
