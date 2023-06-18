import { useCartDispatch } from '../contexts/index';

const TableQuantityButton = ({ children, type, item }) => {
	const dispatch = useCartDispatch();

	const isMinimum = type === "Decrease" && item.quantity <= 1;

	return (
		<button
			onClick={() => dispatch({ type, title: item.title })}
			disabled={isMinimum}
			title={isMinimum ? "Cannot be reduced further. Remove if need be" : ""}
		>
			{children}
		</button>
	);
};

export default TableQuantityButton;
