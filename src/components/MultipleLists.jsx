import React from "react";
import PropTypes from "prop-types";
import List from "./List";

const MultipleLists = ({ listsTable, sortListsFn, sortListItemsFn }) => {
  const lists = [];
  for (const key in listsTable) {
    lists.push(listsTable[key]);
  }
  if (sortListsFn) lists.sort(sortListsFn);
  return (
    <div>
      {lists.map(({ name, values, id }) => (
        <List key={id} name={name} values={values} sortFn={sortListItemsFn} />
      ))}
    </div>
  );
};

MultipleLists.propTypes = {
  listsTable: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      values: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  sortListsFn: PropTypes.func,
  sortListItemsFn: PropTypes.func,
};

export default MultipleLists;
