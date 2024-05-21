function handleSubmit(evt) {
    evt.preventDefault()
    console.log("Submitted form")
}

export default function Form() {
    return (
        <form onSubmit={handleSubmit}>
            <button>Submit</button>
        </form>
    );
}