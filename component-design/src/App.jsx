import './App.css'
// import LuckyN from './LuckyN'
// import {sum} from "./utils"
// import Box from './Box'
import BoxGrid from './BoxGrid'

// function lessThan8(dice) {
//   return sum(dice) < 8;
// }

// function allSame(dice) {
//   return dice.every((n) => n === dice[0]);
// }

function App() {
  return (
    <div>
      {/* <LuckyN title="Triples" numDice={3} winCheck={allSame}/>
      <LuckyN title="Less than 8" numDice={5} winCheck={lessThan8}/> */}
    
      <BoxGrid num={9}/>
    </div>
  )
}

export default App
