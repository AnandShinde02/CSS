import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Feedback Form</h2>

      {!submitted ? (

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <br /><br />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <br /><br />

          <textarea
            placeholder="Enter Feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <br /><br />

          <button type="submit">Submit</button>

        </form>

      ) : (

        <h3>Thank you for your feedback!</h3>

      )}

    </div>
  );
}

export default App;