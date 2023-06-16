import TableItemRow from './TableItemRow';

const product = { name: 'a', price: 2 };

const item = { ...product, quantity: 2 };
const items = [item, item];

const TableItems = ({ type }) => {
	return (
		<table>
			<tr>
				<th>Item</th>
				{type == "cart" &&
					<th>Quantity</th>
				}
				<th>Price ($)</th>
				<th>Action</th>
			</tr>

			<TableItemRow item={type == "cart" ? item : product} actionLabel={type == "cart" ? "Remove" : "Add"}></TableItemRow>

			{type == "cart" &&
				<tr>
					<td colSpan={2}><b>Total price ($):</b></td>
					<td>{items.reduce((acc, {price}) => acc + price, 0)}</td>
				</tr>
			}
		</table>
	);
};

export default TableItems;
