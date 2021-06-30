import { useEffect, useState } from "react";
import MultipleLists from "./components/MultipleLists";

const App = () => {
  const [lists, setLists] = useState({});

  // Fetch JSON data on page load
  useEffect(() => {
    fetch("https://fetch-hiring.s3.amazonaws.com/hiring.json")
      .then((res) => res.json())
      .then((data) => {
        const multipleListTable = data.reduce((table, currentValue) => {
          const { name, listId, id } = currentValue;
          if (!name) return table;

          if (!table[listId]) {
            table[listId] = {
              id: listId,
              name: `List ${listId}`,
              values: [],
            };
          }
          table[listId].values.push({ id, name });
          return table;
        }, {});
        setLists(multipleListTable);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Fetch Exercise</h1>
        <MultipleLists
          listsTable={lists}
          sortListsFn={(a, b) => a.id - b.id}
          sortListItemsFn={sortByItemNumber}
        />
      </header>
    </div>
  );
};

// Sort objects of type { name: "Item #" }
function sortByItemNumber(a, b) {
  const getItemNumber = (name) => name.split(" ")[1];
  return getItemNumber(a.name) - getItemNumber(b.name);
}

export default App;
