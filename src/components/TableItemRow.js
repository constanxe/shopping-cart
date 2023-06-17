const TableItemRow = ({ item }) => {
	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.price}</td>
			{item.quantity &&
				<td>{item.quantity}</td>
			}
			<td><button>{item.quantity ? "Remove" : "Add"}</button></td>
		</tr>
	);
};

export default TableItemRow;
