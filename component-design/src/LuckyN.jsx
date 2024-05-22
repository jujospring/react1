import { useState } from 'react';
import {getRolls} from "./utils";
import Dice from "./Dice";
import Button from './Button';
// import "./Dice.css";

export default function LuckyN({title="Dice Game", numDice=2, winCheck}) {
  const [dice, setDice] = useState(getRolls(numDice));
  const isWinner = winCheck(dice);

  const roll = () => {
    setDice(getRolls(numDice));
  }

  return (
    <main className="LuckyN">
      <h1>{title}</h1>
      <Dice dice={dice}/>
      {isWinner && <h3>Winner!</h3>}
      {/* <button onClick={roll}>Roll Again!</button> */}
      <Button funk={roll} label={"Roll"}/>
    </main>
  )
}