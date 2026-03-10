import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setError("Name cannot be empty");
      return;
    }

    if (age < 18 || age > 30) {
      setError("Age must be between 18 and 30");
      return;
    }

    if (!course) {
      setError("Please select course");
      return;
    }

    setError("");
    alert("Enrollment Successful");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Student Enrollment Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <br /><br />

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          <option>React</option>
          <option>Angular</option>
          <option>JavaScript</option>
        </select>

        <br /><br />

        <button type="submit">Submit</button>

      </form>

      {error && <p style={{color:"red"}}>{error}</p>}

    </div>
  );
}

export default App;