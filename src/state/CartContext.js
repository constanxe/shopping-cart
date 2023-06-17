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
    case 'add': {
      return [...cart, {
        ...action.item,
        quantity: 0
      }];
    }
    case 'decrease': {
      return cart.map(item => {
        if (item.name === action.name) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        } else {
          return item;
        }
      });
    }
    case 'increase': {
      return cart.map(item => {
        if (item.name === action.name) {
          return {
            ...item,
            quantity: item.quantity - 1
          };
        } else {
          return item;
        }
      });
    }
    case 'remove': {
      return cart.filter(item => item.name !== action.name);
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
