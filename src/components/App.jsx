import { useEffect, useState } from "react";
import MultipleLists from "./MultipleLists";
import { reduceListItemsToObject } from "../util/reduce";
import { sortByIdNumber, sortByItemNumber } from "../util/sort";

const App = () => {
  const [lists, setLists] = useState({});

  // Fetch JSON data on page load
  useEffect(() => {
    fetch("https://fetch-hiring.s3.amazonaws.com/hiring.json")
      .then((res) => res.json())
      .then((data) => {
        const listsObject = data.reduce(reduceListItemsToObject, {});
        setLists(listsObject);
      })
      .catch(() => {
        setLists(null);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <div className="content-container">
          <h1>Fetch Exercise</h1>
        </div>
      </header>
      <div className="content-container">
        <main>
          {lists ? (
            <MultipleLists
              listsTable={lists}
              sortListsFn={sortByIdNumber}
              sortListItemsFn={sortByItemNumber}
            />
          ) : (
            <p className="center-text">
              "Failed to fetch resource from
              https://fetch-hiring.s3.amazonaws.com/hiring.json"
            </p>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
