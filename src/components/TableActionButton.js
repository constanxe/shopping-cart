import { useCart, useCartDispatch } from '../store/cart/CartContext';

const TableActionButton = ({ item }) => {
	const cart = useCart();
	const dispatch = useCartDispatch();

	const action = item.quantity ? "Remove" : "Add";

	return (
		<button
			onClick={() => dispatch({type: action.toLowerCase(), item})}
			disabled={action === "Add" && cart.find(c => c.name === item.name)}
		>
			{action}
		</button>
	);
};

export default TableActionButton;
