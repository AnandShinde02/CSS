import React from "react";

function App() {

  const names = ["Aarav", "Priya", "Rohan", "Sneha", "Karan"];

  return (
    <div style={{ padding: "30px" }}>
      <h2>Student Name List</h2>

      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;