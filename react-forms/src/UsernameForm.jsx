import { useState } from "react"

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  const updateUsername = (evt) => {
    console.log("updated...");
    console.log(evt.target.value);
    setUsername(evt.target.value);
  }
  const reset = () => {
    setUsername("");
  }
  return (
    <div>
    <label htmlFor="username">Enter username:</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={updateUsername}
        id="username"
      />
      <button onClick={reset}>Submit</button>
    </div>
  )
}