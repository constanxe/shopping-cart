import { useCart, useCartDispatch } from '../store/cart/CartContext';

const CartTableFooter = () => {
	const items = useCart();
	const dispatch = useCartDispatch();

	return (
		<tfoot>
			<tr>
				<td colSpan={2}><b>Total price ($):</b></td>
				<td>{items.reduce((acc, {quantity, price}) => acc + quantity*price, 0)}</td>
				<td><button onClick={() => dispatch({ type: 'clear' })}>Clear</button></td>
			</tr>
		</tfoot>
	);
};

export default CartTableFooter;
