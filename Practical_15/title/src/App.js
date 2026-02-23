import React from "react";

// Child Component
function Child(props) {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={() => props.greet("Anand")}>
        Click to Greet
      </button>
    </div>
  );
}

// Parent Component
function App() {

  function showMessage(name) {
    alert("Hello, " + name + "!");
  }

  return (
    <div style={{ padding: "30px" }}>
      <h2>Passing Function as Prop</h2>
      <Child greet={showMessage} />
    </div>
  );
}

export default App;