//common array patterns
const shoppingList = [
  {id: 1, product: "HDMI Cable", price: 16},
  {id: 2, product: "Monitor", price: 88},
  {id: 3, product: "Keyboard", price: 64},
];

//add element
[...shoppingList, {id: 4, product: "Mouse", price: 40}];

//remove element
shoppingList.filter((item) => item.id !== 2);

//modify aspect of all elements
shoppingList.map((item) => {
  return {
    ...item, 
    product: item.product.toLowerCase(),
  };
});

//modify single element (keeps all items the same except for specified element)
shoppingList.map((item) => {
	if (item.id === 4) {
		return {...item, price: 64};
	} else {
		return item;
	}
});

//also make a copy of the array when sorting
//  const sortedArr = [...arr].sort();