import { useCart } from '../contexts/index';
import { Header, TableItems } from '../components/index';

const Cart = () => {
	const cart = useCart();

	return (
		<section>
			<Header>Your shopping cart 🛒</Header>
			<TableItems items={cart}></TableItems>
			{!cart.length && <small>❗ Start by adding a product</small>}
		</section>
  );
}

export default Cart;
