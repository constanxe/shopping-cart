import { useCartDispatch } from '../state/CartContext';

const TableActionButton = ({ item }) => {
	const dispatch = useCartDispatch();

	const action = item.quantity ? "Remove" : "Add";

	return <button onClick={() => dispatch({type: action.toLowerCase(), item})}>{action}</button>;
};

export default TableActionButton;
