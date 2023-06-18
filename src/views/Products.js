import { useState, useEffect } from 'react';

import { Header, Hint, TableItems } from '../components/index';

const Products = () => {
	const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err.message));
 }, []);

	return (
		<>
			<Header>Products available 🛍</Header>
			<TableItems items={products}></TableItems>
			{!products.length && <Hint></Hint>}
		</>
  );
}

export default Products;
