import { useState } from "react"

export default function BetterSignupForm() {
  const [formData, setFormData] = useState({firstName: "", lastName: "", password: ""});

  const handleChange = (evt) => {
    setFormData(currData => {
      return {
        ...currData,
        [evt.target.name]: evt.target.value,
      };
    });
  }
  const reset = () => {
    console.log(formData);
    // setFormData({firstName: "", lastName: ""});
  }
  return (
    <div>
      <label htmlFor="firstname">First name:</label>
      <input
        type="text"
        placeholder="first name"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        id="firstname"
      />
      <label htmlFor="lastname">Last name:</label>
      <input
        type="text"
        placeholder="last name"
        value={formData.lastName}
        onChange={handleChange}
        name="lastName"
        id="lastname"
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        name="password"
        id="password"
      />
      <button onClick={reset}>Submit</button>
    </div>
  )
}