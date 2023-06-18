import { useState, useEffect } from 'react';

import { Header, TableItems } from '../components/index';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err.message));
 	}, []);

	return (
		<section>
			<Header>Products available 🛍</Header>
			<TableItems items={products}></TableItems>
			{!products.length && <small>❗ Please try again later</small>}
		</section>
  );
}

export default Products;
