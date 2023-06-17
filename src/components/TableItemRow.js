const TableItemRow = ({ item }) => {
	return (
		<tr>
			<td>{item.name}</td>
			<td>{item.price}</td>
			{item.quantity &&
				<td>{item.quantity}</td>
			}
			<td>
				{item.quantity ? (
					<>
						<button>-</button>
						<button>+</button>
						<button>x</button>
					</>
				) : (
					<button>Add</button>
				)}
			</td>
		</tr>
	);
};

export default TableItemRow;
