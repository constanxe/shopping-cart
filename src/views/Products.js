import { Header, TableItems, Hint } from '../components/index';

const PRODUCTS = [
	{ name: 'A', price: 1 },
	{ name: 'B', price: 2 },
	{ name: 'C', price: 3 }
];

const Products = () => {
  const products = PRODUCTS;

	return (
		<section>
			<Header>Products available 🛍</Header>
			<TableItems items={products}></TableItems>
			{!products.length && <Hint>Please try again later</Hint>}
		</section>
  );
}

export default Products;
