import React, { useState } from "react";

function App() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [experience,setExperience] = useState("");

  const [error,setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!name || !email || !phone || !experience){
      setError("All fields are required");
      return;
    }

    if(!email.includes("@")){
      setError("Invalid Email");
      return;
    }

    if(phone.length !== 10){
      setError("Phone must be 10 digits");
      return;
    }

    setError("");
    alert("Application Submitted");
  }

  return(
    <div style={{padding:"30px"}}>
      <h2>Job Application Form</h2>

      <form onSubmit={handleSubmit}>

        <input placeholder="Name" value={name}
        onChange={(e)=>setName(e.target.value)} />

        <br/><br/>

        <input placeholder="Email" value={email}
        onChange={(e)=>setEmail(e.target.value)} />

        <br/><br/>

        <input placeholder="Phone" value={phone}
        onChange={(e)=>setPhone(e.target.value)} />

        <br/><br/>

        <input placeholder="Experience (Years)"
        value={experience}
        onChange={(e)=>setExperience(e.target.value)} />

        <br/><br/>

        <button type="submit">Submit</button>

      </form>

      {error && <p style={{color:"red"}}>{error}</p>}

    </div>
  )
}

export default App