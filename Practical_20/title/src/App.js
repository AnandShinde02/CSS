import React from "react";

function App() {

  const students = ["Amit", "Riya", "Neha", "Karan"];

  return (
    <div style={{ padding: "30px" }}>

      <h2>React List Example</h2>

      <h3>List Without Key</h3>
      <ul>
        {students.map((name) => (
          <li>{name}</li>
        ))}
      </ul>

      <h3>List With Key</h3>
      <ul>
        {students.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;