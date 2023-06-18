import { useCartDispatch } from '../store/cart/CartContext';

const TableQuantityButton = ({ children, type, item }) => {
	const dispatch = useCartDispatch();

	return (
		<button
			onClick={() => dispatch({ type, name: item.name })}
			disabled={type === "Decrease" && item.quantity <= 1}
		>
			{children}
		</button>
	);
};

export default TableQuantityButton;