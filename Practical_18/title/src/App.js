import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div style={{ padding: "30px" }}>
      <h2>Real Time React Form</h2>

      <form>
        <label>Name:</label>
        <br />

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Name"
        />

        <br /><br />

        <label>Email:</label>
        <br />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
        />
      </form>

      <hr />

      <h3>Real Time Preview</h3>

      <p>Name: {name}</p>
      <p>Email: {email}</p>

    </div>
  );
}

export default App;