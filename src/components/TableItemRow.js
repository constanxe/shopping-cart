const TableItemRow = ({ item }) => {
	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.price}</td>
			{item.quantity &&
				<td><button>-</button> {item.quantity} <button>+</button></td>
			}
			<td><TableActionButton action={item.quantity ? "Remove" : "Add"}></TableActionButton></td>
		</tr>
	);
};

export default TableItemRow;
