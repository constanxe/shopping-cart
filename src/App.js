import { useState, useEffect } from 'react';

import { useCart } from './context/cart/CartContext';

import Header from './components/Header';
import TableItems from './components/TableItems';

import './App.css';

function App() {
  const cart = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err.message));
 }, []);

  return (
    <div className="App">
      <section>
        <Header>Products available 🛍</Header>
        <TableItems items={products}></TableItems>
        {!products.length && <small>❗ Please try again later</small>}
      </section>

      <section>
        <Header>Your shopping cart 🛒</Header>
        <TableItems items={cart}></TableItems>
        {!!products.length && !cart.length && <small>❗ Start by adding a product</small>}
      </section>
    </div>
  );
}

export default App;
