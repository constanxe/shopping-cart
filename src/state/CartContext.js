import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext(null);

const CartDispatchContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialCart
  );

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}

function cartReducer(cart, action) {
  switch (action.type) {
    case 'add': { // item
      return [...cart, {
        ...action.item,
        quantity: 1
      }];
    }
    case 'decrease': { // name
      return cart.map(c => {
        if (c.name === action.name) {
          return {
            ...c,
            quantity: c.quantity - 1
          };
        } else {
          return c;
        }
      });
    }
    case 'increase': { // name
      return cart.map(c => {
        if (c.name === action.name) {
          return {
            ...c,
            quantity: c.quantity + 1
          };
        } else {
          return c;
        }
      });
    }
    case 'remove': { // item
      return cart.filter(c => c.name !== action.item.name);
    }
    case 'clear': {
      return [];
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const initialCart = [];
