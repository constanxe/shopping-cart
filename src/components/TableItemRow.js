const TableItemRow = ({ item }) => {
	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.price}</td>
			<td>{item.quantity}</td>
			<td><button>Remove</button></td>
		</tr>
	);
};

export default TableItemRow;
