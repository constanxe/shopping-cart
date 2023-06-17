export function cartReducer(cart, action) {
  switch (action.type) {
    case 'add': {
      return add(cart, action.item);
    }
    case 'decrease': {
			return changeQuantity(cart, action.name, -1);
    }
    case 'increase': {
			return changeQuantity(cart, action.name, 1);
    }
    case 'remove': {
      return remove(cart, action.item);
    }
    case 'clear': {
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

const changeQuantity = (cart, name, change) => cart.map(c => {
	if (c.name === name) {
		return {
			...c,
			quantity: c.quantity + change
		};
	} else {
		return c;
	}
});

const remove = (cart, item) => cart.filter(c => c.name !== item.name);
