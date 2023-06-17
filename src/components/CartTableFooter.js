const CartTableFooter = ({ items }) => {
	return (
		<tfoot>
			<tr>
				<td colSpan={2}><b>Total price ($):</b></td>
				<td>{items.reduce((acc, {quantity, price}) => acc + quantity*price, 0)}</td>
				<td><button>Clear</button></td>
			</tr>
		</tfoot>
	);
};

export default CartTableFooter;
