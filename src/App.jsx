import { useEffect, useState } from "react";
import MultipleLists from "./components/MultipleLists";
import { sortByIdNumber, sortByItemNumber } from "./util/sort";

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
        <div className="content-container">
          <h1>Fetch Exercise</h1>
        </div>
      </header>
      <main>
        <div className="content-container">
          <MultipleLists
            listsTable={lists}
            sortListsFn={sortByIdNumber}
            sortListItemsFn={sortByItemNumber}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
