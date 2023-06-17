import TableItemRow from './TableItemRow';

const TableItems = ({ items }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Item</th>
					<th>Price ($)</th>
					{items[0].quantity &&
						<th>Quantity</th>
					}
					<th>Action</th>
				</tr>
			</thead>

			<tbody>
				{items.map((item, i) => (
					<TableItemRow key={i} item={item}></TableItemRow>
				))}
			</tbody>

			{items[0].quantity &&
				<tfoot>
					<tr>
						<td colSpan={2}><b>Total price ($):</b></td>
						<td>{items.reduce((acc, {quantity, price}) => acc + quantity * price, 0)}</td>
						<td><button>Clear</button></td>
					</tr>
				</tfoot>
			}
		</table>
	);
};

export default TableItems;
