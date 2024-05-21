import { useState } from "react";
import "./Toggler.css";

export default function ToggleCounter() {
    const [isDrinking, setIsJuiced] = useState(true);
    const [count, setCount] = useState(0)
    const toggleIsDrinking = () => {
        setIsJuiced(!isDrinking);
    }
    const changeNum = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <p className="Toggler" onClick={toggleIsDrinking}>
                {isDrinking ? "🥴" : "🤓"}
            </p>
            <p>{count}</p>
            <button onClick={changeNum}>+</button>
        </div>
    );
}