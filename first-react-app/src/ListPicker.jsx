export default function ListPicker({vals}) {
    const index = Math.floor(Math.random() * vals.length);
    const randElement = vals[index];
    return (
        <div>
            <p>Random value: {randElement}</p>
        </div>
    );
}