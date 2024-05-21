import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    console.log("Component executed...");
    console.log(`count: ${count}`);
    const changeNum = () => {
        setCount(count + 1);
        console.log("changeNum executed...");
        console.log(`count: ${count}`);
    };
    return (
        <div>
            <p>Count is: {count}</p>
            <button onClick={changeNum}>Increment</button>
        </div>
    )
}