import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(10);
  let Multi = () => {
    if (count >= 100) {
      return;
    }
    setCount(count * 2);
  };

  let Add = () => {
    if (count >= 20) {
      return;
    }
    setCount(count + 1);
  };

  let Sub = () => {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <div className="App">
      <h3>Counter : {count} </h3>
      <button onClick={Add}>Add</button>
      <button onClick={Sub}>Sub</button>
      <button onClick={Multi}>Multi</button>
      <div className={count % 2 == 0 ? 'green' : 'red'}>
        {count} is a {count % 2 == 0 ? "Even" : "Odd"} number
      </div>
    </div>
  );
}

export default App;
