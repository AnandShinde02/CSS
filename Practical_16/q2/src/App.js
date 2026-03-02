import React, { useEffect } from "react";

function App() {

  useEffect(() => {
    console.log("Mounted");

    return () => {
      console.log("Unmounted");
    };
  }, []);

  useEffect(() => {
    console.log("Updated");
  });

  return (
    <div style={{ padding: "30px" }}>
      <h2>React Lifecycle Example</h2>
    </div>
  );
}

export default App;