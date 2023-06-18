import { useCart } from '../contexts/index';
import { Header, TableItems, Hint } from '../components/index';

const Cart = () => {
	const cart = useCart();

	return (
		<section>
			<Header>Your shopping cart 🛒</Header>
			<TableItems items={cart}></TableItems>
			{!cart.length && <Hint>Start by adding a product</Hint>}
		</section>
  );
}

export default Cart;
