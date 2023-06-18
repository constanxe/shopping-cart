import { useCart, useCartDispatch } from '../contexts/index';

const CartTableFooter = () => {
	const items = useCart();
	const dispatch = useCartDispatch();

	const totalPrice = items.reduce((acc, { quantity, price }) => acc + quantity*price, 0);

	return (
		<tfoot>
			<tr>
				<td colSpan={2}>
					<b>Total price ($):</b>
				</td>
				<td>
					{totalPrice}
				</td>
				<td>
					<button onClick={() => dispatch({ type: 'Clear' })}>Clear</button>
				</td>
			</tr>
		</tfoot>
	);
};

export default CartTableFooter;
