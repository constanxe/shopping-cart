import { useCartDispatch } from '../state/CartContext';

import TableActionButton from './TableActionButton';

const TableItemRow = ({ item }) => {
	const dispatch = useCartDispatch();

	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.price}</td>
			{item.quantity &&
				<td>
					<button onClick={() => dispatch({ type: 'decrease', name: item.name })}>-</button>
					{item.quantity}
					<button onClick={() => dispatch({ type: 'increase', name: item.name })}>+</button>
				</td>
			}
			<td><TableActionButton item={item}></TableActionButton></td>
		</tr>
	);
};

export default TableItemRow;
