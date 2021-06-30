import { useEffect } from "react";

const App = () => {
  // Fetch JSON data on page load
  useEffect(() => {
    fetch("https://fetch-hiring.s3.amazonaws.com/hiring.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Fetch Exercise</h1>
      </header>
    </div>
  );
};

export default App;
