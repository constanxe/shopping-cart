const TableItemRow = ({ item, actionLabel }) => {
	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.quantity}</td>
			<td>{item.price}</td>
			<td><button>{actionLabel}</button></td>
		</tr>
	);
};

export default TableItemRow;
