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
        <MultipleLists listsTable={lists} />
      </header>
    </div>
  );
};

export default App;
