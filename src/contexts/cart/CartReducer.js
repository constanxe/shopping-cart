export function cartReducer(cart, action) {
  switch (action.type) {
    case 'Add': {
      return add(cart, action.item);
    }
    case 'Decrease': {
			return changeQuantity(cart, action.title, -1);
    }
    case 'Increase': {
			return changeQuantity(cart, action.title, 1);
    }
    case 'Remove': {
      return remove(cart, action.item);
    }
    case 'Clear': {
      return [];
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const add = (cart, item) => [...cart, {
	...item,
	quantity: 1
}];

const changeQuantity = (cart, title, change) => cart.map(currentItem => {
	if (currentItem.title === title) {
		return {
			...currentItem,
			quantity: currentItem.quantity + change
		};
	} else {
		return currentItem;
	}
});

const remove = (cart, item) => cart.filter(currentItem => currentItem.title !== item.title);
