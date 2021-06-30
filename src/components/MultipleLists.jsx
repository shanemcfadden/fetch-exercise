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
      {lists.map((list, i) => (
        <List
          key={i}
          name={list.name}
          values={list.values}
          sortFn={sortListItemsFn}
        />
      ))}
    </div>
  );
};

export default MultipleLists;
