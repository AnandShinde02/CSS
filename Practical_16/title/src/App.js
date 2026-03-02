import React, { useState, useEffect } from "react";

/* Child Component */
function Child(props) {

  // Mounting & Unmounting
  useEffect(() => {
    console.log("Child Component Mounted");

    return () => {
      console.log("Child Component Unmounted");
    };
  }, []);

  // Updating
  useEffect(() => {
    console.log("Props Updated:", props.count);
  }, [props.count]);

  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <h3>Child Component</h3>
      <p>Count from Parent: {props.count}</p>
      <button onClick={() => props.sendMessage("React User")}>
        Pass Argument
      </button>
    </div>
  );
}

/* Parent Component */
function App() {

  const [count, setCount] = useState(0);
  const [showChild, setShowChild] = useState(true);

  function showAlert(name) {
    alert("Hello " + name);
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>React Lifecycle + Function Prop</h2>

      <h3>Parent Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={() => setShowChild(!showChild)}>
        Toggle Child
      </button>

      <hr />

      {showChild && (
        <Child
          count={count}
          sendMessage={showAlert}
        />
      )}
    </div>
  );
}

export default App;