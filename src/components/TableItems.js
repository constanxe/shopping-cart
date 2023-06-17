import TableItemRow from './TableItemRow';
import CartTableFooter from './CartTableFooter';

const TableItems = ({ items }) => {
	return items?.length ? (
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

			{items[0].quantity && <CartTableFooter items={items}></CartTableFooter>}
		</table>
	) : <p>Start by adding a product from above</p>;
};

export default TableItems;
