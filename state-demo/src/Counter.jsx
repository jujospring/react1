import { useState } from "react";

export default function Counter() {
	console.log("Rendered...")
  const [count, setCount] = useState(0);
  const addOne = () => {
    setCount(count + 1);
  };
	const addTwo = () => {
		setCount(countNow => countNow + 1);
		setCount(countNow => countNow + 1);
	};
	const setEight = () => {
		setCount(8);
	};
  return (
		<div>
      <h2>Counter: {count}</h2>
        <button onClick={addOne}>+1</button>
				<button onClick={addTwo}>+2</button>
				<button onClick={setEight}>8</button>
    </div>
  )
}