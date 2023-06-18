import { useState, useEffect } from 'react';

import { Header, Hint, TableItems } from '../components/index';

const Products = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/poducts')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
			.catch((err) => console.error(err.message))
			.finally(() => setIsLoading(false));
 }, []);

	return (
		<div>
			<Header>Products available 🛍</Header>
			{isLoading ?
				<small>Loading...</small> :
				(products.length ?
					<TableItems items={products}></TableItems> :
					<Hint></Hint>
				)
			}
		</div>
  );
}

export default Products;
