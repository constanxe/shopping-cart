import { useCart, useCartDispatch } from '../contexts/index';

const TableActionButton = ({ item }) => {
	const cart = useCart();
	const dispatch = useCartDispatch();

	const type = item.quantity ? "Remove" : "Add";
	const isAdded = type === "Add" && cart.find(c => c.title === item.title);

	return (
		<button
			onClick={() => dispatch({ type, item })}
			disabled={isAdded}
			title={isAdded ? "Saved to cart" : "Click to save to cart"}
		>
			{isAdded ? "Added" : type}
		</button>
	);
};

export default TableActionButton;
