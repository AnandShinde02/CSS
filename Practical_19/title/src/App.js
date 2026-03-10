import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let formErrors = {};

    if (!name) {
      formErrors.name = "Name is required";
    }

    if (!email) {
      formErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      formErrors.email = "Invalid email format";
    }

    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>React Form Validation</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        {errors.name && <p style={{color:"red"}}>{errors.name}</p>}

        <br />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        {errors.email && <p style={{color:"red"}}>{errors.email}</p>}

        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {errors.password && <p style={{color:"red"}}>{errors.password}</p>}

        <br />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}

export default App;