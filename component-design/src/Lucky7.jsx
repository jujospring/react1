import { useState } from 'react';
import {getRolls, sum} from "./utils";
import "./Lucky7.css";

export default function Lucky7() {
  const [dice, setDice] = useState(getRolls(2));
  const won = sum(dice) === 7;

  const roll = () => {
    setDice(getRolls(2));
  }

  return (
    <main className="Lucky7">
      <h1>Lucky7</h1>
      {won && <h2>Lucky7 Winner!</h2>}
      <section className="Lucky7-dice">
        <div className="Lucky7-die">{dice[0]}</div>
        <div className="Lucky7-die">{dice[1]}</div>
      </section>
      <button onClick={roll}>Roll Again!</button>
    </main>
  )
}