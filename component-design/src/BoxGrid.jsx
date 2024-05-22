import Box from "./Box";
import PropTypes, { string } from "prop-types";
import { useState } from "react";
// import "./BoxGrid.css";

// export default function BoxGrid({colors, num}) {
  export default function BoxGrid({num}) {
  const [boxesActive, setBoxesActive] = useState(new Array(num).fill(false));
  // const boxes = [];
  // for (let i = 0; i < num; i++) {
  //     // boxes.push(<Box colors={colors} num={num}/>);
  //     boxes.push(<Box/>);
  // }
  const reset = () => {
    setBoxesActive(new Array(num).fill(false));
  }

  const toggleBox = (index) => {
    setBoxesActive((oldBoxesActive) => {
      return oldBoxesActive.map((n, i) => {
        if (i === index) {
          return !n;
        } else {
          return n;
        }
      })})
    }
    
  
  return (
      <div className="BoxGrid">
        {boxesActive.map((b, ind) => <Box key={ind} isActive={b} toggle={() => toggleBox(ind)}/>)}
        <button onClick={reset}>Reset</button>
      </div>
  );
}

BoxGrid.propTypes = {
  colors: PropTypes.arrayOf(string),
  num: PropTypes.number,
}
