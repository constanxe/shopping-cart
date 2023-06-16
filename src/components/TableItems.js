import TableItemRow from './TableItemRow';

const product = { name: 'a', price: 2 };

const cartItem = { ...product, quantity: 2 };
const cartItems = [cartItem, cartItem];

const TableItems = ({ type }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Item</th>
					{type === "cart" &&
						<th>Quantity</th>
					}
					<th>Price ($)</th>
					<th>Action</th>
				</tr>
			</thead>

			<tbody>
				<TableItemRow item={type === "cart" ? cartItem : product} actionLabel={type === "cart" ? "Remove" : "Add"}></TableItemRow>
			</tbody>

			{type === "cart" &&
				<tfoot>
					<tr>
						<td colSpan={2}><b>Total price ($):</b></td>
						<td>{cartItems.reduce((acc, {quantity, price}) => acc + quantity*price, 0)}</td>
					</tr>
				</tfoot>
			}
		</table>
	);
};

export default TableItems;
