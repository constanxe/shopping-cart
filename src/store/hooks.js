import { useDispatch, useSelector } from 'react-redux'

export const useDispatch = () => useDispatch();

export const useCart = () => useSelector((state) => state.cart.items);
