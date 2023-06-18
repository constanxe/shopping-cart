import { useCart } from '../contexts/index';
import { Header, Hint, TableItems } from '../components/index';

const Cart = () => {
	const cart = useCart();

	return (
		<>
			<Header>Your shopping cart 🛒</Header>
			<TableItems items={cart}></TableItems>
			{!cart.length && <Hint>Start by adding a product</Hint>}
		</>
  );
}

export default Cart;
