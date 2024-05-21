import { useState } from "react";
import "./Toggler.css";

export default function Toggler() {
    const [isDrinking, setIsJuiced] = useState(true);
    const toggleIsDrinking = () => {
        setIsJuiced(!isDrinking);
    }
    return (
        <p className="Toggler" onClick={toggleIsDrinking}>
            {isDrinking ? "🥴" : "🤓"}
        </p>
    );
}