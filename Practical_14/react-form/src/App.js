import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // stops page reload

    setSubmittedData({
      name: name,
      email: email
    });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>React Form Handling Example</h2>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name: </label>
          <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <br />

        <div>
          <label>Email: </label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />

        <button type="submit">Submit</button>

      </form>

      <br />

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Email:</b> {submittedData.email}</p>
        </div>
      )}

    </div>
  );
}

export default App;
