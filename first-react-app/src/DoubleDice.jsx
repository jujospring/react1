export default function DoubleDice() {
    const num1 = Math.floor(Math.random() * 3) + 1;
    const num2 = Math.floor(Math.random() * 3) + 1;
    const isWinner = num1 === num2;
    const styles = {color: isWinner ? "green" : "red"};
    // const result = num1 === num2 ? "You win!" : "You Lose.";
    // return (
    //     <div>
    //         {/* <h2>{result}</h2> */}
    //         <h2>{num1 === num2 ? "You win!" : "You Lose."}</h2>
    //         <p>Num 1: {num1}</p>
    //         <p>Num 2: {num2}</p>
    //     </div>
    // )

    // return (
    //     <div>
    //         <h2>Double Dice</h2>
    //         {num1 === num2 ? <h3>You win!</h3> : null}
    //         <p>Num 1: {num1}</p>
    //         <p>Num 2: {num2}</p>
    //     </div>
    // )

    return (
        <div className="DoubleDice">
            <h2  style={styles}>Double Dice</h2>
            {isWinner && <h3>You win!</h3>}
            <p>Num 1: {num1}</p>
            <p>Num 2: {num2}</p>
        </div>
    )

}