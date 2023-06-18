import TableItemRow from './TableItemRow';
import CartTableFooter from './CartTableFooter';

const TableItems = ({ items }) => {
	const isCart = items?.[0]?.quantity;

	return items?.length ? (
		<table>
			<thead>
				<tr>
					<th>Item</th>
					<th>Price ($)</th>
					{isCart &&
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

			{isCart && <CartTableFooter></CartTableFooter>}
		</table>
	) : <p>Start by adding a product from above</p>;
};

export default TableItems;
