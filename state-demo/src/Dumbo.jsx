import { useState } from "react";

function genGameBoard() {
    console.log("Making board...");
    return Array(5000);
}

export default function Dumbo () {
    const [board, setBoard] = useState(genGameBoard);
    return (
        <div>
            <h1>State demo</h1>
            <button onClick={() => setBoard("Hello there")}>Click to change state</button>
        </div>
    )
}