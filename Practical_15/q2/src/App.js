import React, { useState } from "react";

function Child(props) {
  return (
    <button onClick={props.increment}>
      Increase Counter
    </button>
  );
}

function App() {

  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Counter: {count}</h2>
      <Child increment={increaseCount} />
    </div>
  );
}

export default App;