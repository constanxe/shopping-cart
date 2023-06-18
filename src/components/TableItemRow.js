import TableQuantityButton from './TableQuantityButton';
import TableActionButton from './TableActionButton';

const TableItemRow = ({ item }) => {
	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.price}</td>
			{item.quantity &&
				<td>
					<TableQuantityButton type="Decrease" item={item}>-</TableQuantityButton>&nbsp;
					{item.quantity}&nbsp;
					<TableQuantityButton type="Increase" item={item}>+</TableQuantityButton>
				</td>
			}
			<td><TableActionButton item={item}></TableActionButton></td>
		</tr>
	);
};

export default TableItemRow;
