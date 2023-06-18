import { useState, useEffect } from 'react';

import { Header, Hint, TableItems } from '../components/index';

const Products = () => {
	const [products, setProducts] = useState([]);

	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
			.catch((err) => setError(err.message))
			.finally(() => setIsLoading(false));
	}, []);

	const getContent = () => {
		if (isLoading) {
			return <small>Loading...</small>;
		} else if (error) {
			return <small>{error}</small>;
		} else if (products.length) {
			return <TableItems items={products}></TableItems>;
		} else {
			return <Hint></Hint>;
		}
	}

	return (
		<div>
			<Header>Products available 🛍</Header>
			{getContent()}
		</div>
  );
}

export default Products;
