import './App.css'
// import Chicken from "./Chicken"
// import { Greeter } from './Greeter';
// import { Die } from "./Die"
// import ListPicker from "./ListPicker"
// import DoubleDice from './DoubleDice';
// import Heading from "./Heading"
// import ColorList from "./ColorList"
// import ShoppingList from "./ShoppingList"
import Clicker from "./Clicker";

// const data = [
//   {id: 1, item: "eggs", quantity: 12, completed: false},
//   {id: 2, item: "milk", quantity: 1, completed: true},
//   {id: 3, item: "chicken", quantity: 4, completed: false},
//   {id: 4, item: "carrots", quantity: 6, completed: true},
// ];

function App() {
  return (
    <div>
      {/* <Heading color="violet" text="Hello there" fontSize="64px"/> */}
      
      {/* <Die/>
      <Die sides={8}/>
      <Die sides={16}/>
      <Die sides={24}/> */}

      {/* <ListPicker vals={[0,8,16,24]}/>
      <ListPicker vals={['a','b','c','d']}/> */}
      {/* <ListPicker vals={{a: 1, b: 2}}/> */}

      {/* <DoubleDice/>
      <ColorList colors={["red", "green", "blue", "pink", "yellow"]}/>
      <ColorList colors={["olive", "tan", "slategray"]}/> */}

      {/* <ShoppingList items={data}/> */}
      <Clicker/>
    </div>
  );
}

export default App
