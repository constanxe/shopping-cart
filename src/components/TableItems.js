import TableItemRow from './TableItemRow';

const product = { name: 'a', price: 2 };

const cartItem = { ...product, quantity: 2 };
const cartItems = [cartItem];

const TableItems = () => {
	return (
		<table>
			<thead>
				<tr>
					<th>Item</th>
					<th>Price ($)</th>
					<th>Quantity</th>
					<th>Action</th>
				</tr>
			</thead>

			<tbody>
				{cartItems.map((item, i) => (
					<TableItemRow key={i} item={item}></TableItemRow>
				))}
			</tbody>

			<tfoot>
				<tr>
					<td colSpan={2}><b>Total price ($):</b></td>
					<td>{cartItems.reduce((acc, {quantity, price}) => acc + quantity*price, 0)}</td>
				</tr>
			</tfoot>
		</table>
	);
};

export default TableItems;
