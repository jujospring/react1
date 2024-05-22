import Die from "./Die"
import "./Dice.css"

export default function Dice({dice, color}) {
  return (
    <section className="Dice">
      {dice.map((n, i) => (
        <Die key={i} num={n} color={color}/>
      ))}
    </section>
  );
}