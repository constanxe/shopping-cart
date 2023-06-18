import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cart/cart-reducer'

export default configureStore({
  reducer: {
    cart: cartReducer
  },
})
