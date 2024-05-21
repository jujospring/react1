function handleClick() {
    console.log("CLICKED THE BUTTON!")
}

export default function Clicker () {
    return (
        <div>
            <p>Click the button</p>
            <button onClick={handleClick}>Click</button>
        </div>
    );
}