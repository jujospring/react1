
// import Counter from "./Counter"
import './App.css'
// import Scorekeeper from './Scorekeeper';
// import EmojiClicker from './EmojiClicker';
import Scorekeeper2 from './Scorekeeper2';

function App() {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Scorekeeper/> */}
      {/* <EmojiClicker/> */}
      <Scorekeeper2 numPlayers={4} target={8}/>
    </div>
  );
}

export default App
