import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Counter>
            {({ count, setCount }) => (
              <div>
                {count}
                <button onClick={() => setCount(count + 1)}>+</button>
              </div>
            )}
          </Counter>
          <p></p>
        </p>
      </header>
    </div>
  );
}

export default App;
