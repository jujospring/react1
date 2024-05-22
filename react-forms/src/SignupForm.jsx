import { useState } from "react"

export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const updateFirstName = (evt) => {
    setFirstName(evt.target.value);
  }
  const updateLastName = (evt) => {
    setLastName(evt.target.value);
  }
  const reset = () => {
    console.log(firstName, lastName);
    setFirstName("");
    setLastName("");
  }
  return (
    <div>
      <label htmlFor="firstname">First name:</label>
        <input
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={updateFirstName}
          id="firstname"
        />
        <label htmlFor="lastname">Last name:</label>
        <input
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={updateLastName}
          id="lastname"
        />
        <button onClick={reset}>Submit</button>
    </div>
  )
}