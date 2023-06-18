import { useCart, useCartDispatch } from '../context/cart/CartContext';

const TableActionButton = ({ item }) => {
	const cart = useCart();
	const dispatch = useCartDispatch();

	const type = item.quantity ? "Remove" : "Add";

	return (
		<button
			onClick={() => dispatch({ type, item })}
			disabled={type === "Add" && cart.find(c => c.title === item.title)}
		>
			{type}
		</button>
	);
};

export default TableActionButton;
