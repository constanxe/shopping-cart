const TableItemRow = ({ item, actionLabel }) => {
	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.price}</td>
			{item.quantity &&
				<td >{item.quantity}</td>
			}
			<td><button>{actionLabel}</button></td>
		</tr>
	);
};

export default TableItemRow;
