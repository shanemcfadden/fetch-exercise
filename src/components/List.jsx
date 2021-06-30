import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/List.css";

const List = ({ values, name, sortFn }) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed((prevCollapsed) => !prevCollapsed);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      toggleCollapsed();
    }
  };

  const orderedValues = sortFn ? values.sort(sortFn) : values;
  return (
    <div className={`list${collapsed ? " list--collapsed" : ""}`}>
      <h2
        className="list__header"
        tabIndex="0"
        role="button"
        aria-pressed="false"
        onClick={toggleCollapsed}
        onKeyPress={handleKeyPress}
      >
        {name}
      </h2>
      <ul className="list__items">
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
