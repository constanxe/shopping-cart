import TableItemRow from './TableItemRow';

const product = { name: 'a', price: 2 };

const cartItem = { ...product, quantity: 2 };
const cartItems = [cartItem];

const TableItems = ({ type }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Item</th>
					<th>Price ($)</th>
					{type === "cart" &&
						<th>Quantity</th>
					}
					<th>Action</th>
				</tr>
			</thead>

			<tbody>
				{(type === "cart" ? cartItems : [product]).map((item, i) => (
					<TableItemRow key={i} item={item} actionLabel={type === "cart" ? "Remove" : "Add"}></TableItemRow>
				))}
			</tbody>

			{type === "cart" &&
				<tfoot>
					<tr>
						<td colSpan={2}><b>Total price ($):</b></td>
						<td>{cartItems.reduce((acc, {quantity, price}) => acc + quantity*price, 0)}</td>
						<td><button>Clear</button></td>
					</tr>
				</tfoot>
			}
		</table>
	);
};

export default TableItems;
