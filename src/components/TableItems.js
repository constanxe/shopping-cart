import TableItemRow from './TableItemRow';

const item = { name: 'a', quantity: 2, price: 2.00 };

const TableItems = ({ type }) => {
	return (
		<table>
			<tr>
				<th>Item</th>
				<th>Quantity</th>
				<th>Price ($)</th>
				<th>Action</th>
			</tr>

			<TableItemRow item={item} actionLabel={type == "products" ? "Add" : "Remove"}></TableItemRow>

			<tr>
				<td colSpan={2}><b>Total price ($):</b></td>
				<td>2.00</td>
			</tr>
		</table>
	);
};

export default TableItems;
