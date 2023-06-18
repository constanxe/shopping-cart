import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    add: (state, { item }) => state.items = [...state.items, {
      ...item,
      quantity: 1
    }],
    changeQuantity: (state, { name, change }) => state.items.map(currentItem => {
      if (currentItem.name === name) {
        return {
          ...currentItem,
          quantity: currentItem.quantity + change
        };
      } else {
        return currentItem;
      }
    }),
    remove: (state, { item }) => state.items.filter(currentItem => currentItem.name !== item.name),
    clear: (state) => state.items = []
  },
})

export const { add, changeQuantity, remove, clear } = cartSlice.actions

export default cartSlice.reducer
