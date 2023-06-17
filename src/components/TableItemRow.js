import { useCartDispatch } from '../store/cart/CartContext';

import TableActionButton from './TableActionButton';

const TableItemRow = ({ item }) => {
	const dispatch = useCartDispatch();

	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.price}</td>
			{item.quantity &&
				<td>
					<button onClick={() => dispatch({ type: 'Decrease', name: item.name })} disabled={item.quantity <= 1}>-</button>&nbsp;
					{item.quantity}&nbsp;
					<button onClick={() => dispatch({ type: 'Increase', name: item.name })}>+</button>
				</td>
			}
			<td><TableActionButton item={item}></TableActionButton></td>
		</tr>
	);
};

export default TableItemRow;
