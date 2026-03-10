import React, { useState } from "react";

function App() {

  // State 1: Counter
  const [count, setCount] = useState(0);

  // State 2: User Name
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "30px" }}>
      <h2>React useState Hook Example</h2>

      {/* Counter Section */}
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <hr />

      {/* Input Section */}
      <h3>Enter Your Name:</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Hello, {name}</p>
    </div>
  );
}

export default App;