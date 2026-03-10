import React, { useState } from "react";

function App() {

  const [color, setColor] = useState("lightblue");

  return (
    <div style={{ padding: "30px" }}>
      <h2>Background Color Change</h2>

      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: color,
          marginBottom: "20px"
        }}
      ></div>

      <button onClick={() => setColor("lightgreen")}>
        Change to Green
      </button>

      <button onClick={() => setColor("lightcoral")}>
        Change to Red
      </button>
    </div>
  );
}

export default App;