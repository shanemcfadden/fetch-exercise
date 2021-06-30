import React from "react";
import List from "./List";

const MultipleLists = ({ listsTable }) => {
  const lists = [];
  for (const key in listsTable) {
    lists.push(listsTable[key]);
  }
  return (
    <div>
      {lists.map((list, i) => (
        <List key={i} name={list.name} values={list.values} />
      ))}
    </div>
  );
};

export default MultipleLists;
