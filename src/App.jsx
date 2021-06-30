import { useEffect, useState } from "react";
import MultipleLists from "./components/MultipleLists";

const App = () => {
  const [lists, setLists] = useState({});

  // Fetch JSON data on page load
  useEffect(() => {
    fetch("https://fetch-hiring.s3.amazonaws.com/hiring.json")
      .then((res) => res.json())
      .then((data) => {
        const listsObject = data.reduce((object, currentValue) => {
          const { name, listId, id } = currentValue;
          if (name) {
            if (!object[listId]) {
              object[listId] = {
                id: listId,
                name: `List ${listId}`,
                values: [],
              };
            }
            object[listId].values.push({ id, name });
          }
          return object;
        }, {});
        setLists(listsObject);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Fetch Exercise</h1>
        <MultipleLists
          listsTable={lists}
          sortListsFn={sortByIdNumber}
          sortListItemsFn={sortByItemNumber}
        />
      </header>
    </div>
  );
};

// Sort objects of type { id: #, ...} by #
function sortByIdNumber(a, b) {
  return a.id - b.id;
}

// Sort objects of type { name: "Item #", ... } by #
function sortByItemNumber(a, b) {
  const getItemNumber = (name) => name.split(" ")[1];
  return getItemNumber(a.name) - getItemNumber(b.name);
}

export default App;
