import React from "react";
import List from "./List";

const MultipleLists = ({ listsTable, sortListsFn, sortListItemsFn }) => {
  const lists = [];
  for (const key in listsTable) {
    lists.push(listsTable[key]);
  }
  if (sortListsFn) lists.sort(sortListsFn);
  return (
    <div>
      {lists.map(({ name, values }, i) => (
        <List key={i} name={name} values={values} sortFn={sortListItemsFn} />
      ))}
    </div>
  );
};

export default MultipleLists;
