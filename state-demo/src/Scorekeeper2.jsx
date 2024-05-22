import { useState } from "react";

export default function Scorekeeper2({numPlayers=3, target=5}) {
  // const playerList = Array(numPlayers).fill(0);
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  const incrementScore = (i) => {
    setScores((oldScores) => {
      return oldScores.map((score, i2) => {
        if (i === i2) return score + 1;
        return score;
      });
      // const temp = [...oldScores];
      // temp[i] += 1;
      // return temp;
    });
  }
  const isWinner = (score, target) => {
    return score === target;
  }
  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  }
  return (
    <div>
      <h1>Scorekeeper 2</h1>
      <ul>
        {
          scores.map((score, i) => {
            return (
              <li key={i}>
                Player {i+1}: {score}
                <button onClick={() => incrementScore(i)}>+1</button>
                {isWinner(score, target) && <p>Winner!</p>}
              </li>
              
            )
          })
        }
      </ul>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
}
