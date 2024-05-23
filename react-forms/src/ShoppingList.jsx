import { useState } from "react";
import { v4 as uuid } from "uuid";
// import ShoppingListForm from "./ShoppingListForm";
import ValidShoppingListForm from "./ValidShoppingListForm";

export default function ShoppingList() {
  const [items, setItems] = useState([{id: uuid(), product: "Bugs", quantity: 8}]);
  const addItem = (item) => {
    setItems((currItems) => {
      return [...currItems, {...item, id: uuid()}];
    })
  }
  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((i) => (
          <li key={i.id}>
            {i.product} - {i.quantity}
          </li>
        ))}
      </ul>
      <ValidShoppingListForm addItem={addItem}/>
    </div>
  )
}