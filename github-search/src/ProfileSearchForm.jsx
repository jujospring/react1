import { useState } from "react";

export default function ProfileSearchForm({search}) {
  const [term, setTerm] = useState("");

  function handleChange(evt) {
    setTerm(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(term);
    setTerm("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="github username" value={term} onChange={handleChange} />
      <button>search</button>
    </form>
  );
}