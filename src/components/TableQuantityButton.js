import { useCartDispatch } from '../context/cart/CartContext';

const TableQuantityButton = ({ children, type, item }) => {
	const dispatch = useCartDispatch();

	return (
		<button
			onClick={() => dispatch({ type, title: item.title })}
			disabled={type === "Decrease" && item.quantity <= 1}
		>
			{children}
		</button>
	);
};

export default TableQuantityButton;
