import { useCart, useCartDispatch } from '../contexts/index';

const TableActionButton = ({ item }) => {
	const cart = useCart();
	const dispatch = useCartDispatch();

	const type = item.quantity ? "Remove" : "Add";

	return (
		<button
			onClick={() => dispatch({ type, item })}
			disabled={type === "Add" && cart.find(c => c.name === item.name)}
		>
			{type}
		</button>
	);
};

export default TableActionButton;
