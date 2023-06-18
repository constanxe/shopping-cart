import { useCart } from './context/cart/CartContext';

import Header from './components/Header';
import TableItems from './components/TableItems';

import './App.css';

function App() {
  const cart = useCart();
  const PRODUCTS = [
    { name: 'A', price: 1 },
    { name: 'B', price: 2 },
    { name: 'C', price: 3 }
  ];

  return (
    <div className="App">
      <section>
        <Header>Products available 🛍</Header>
        <TableItems items={PRODUCTS}></TableItems>
      </section>

      <section>
        <Header>Your shopping cart 🛒</Header>
        <TableItems items={cart}></TableItems>
        {!cart.length && <small>❗ Start by adding a product</small>}
      </section>
    </div>
  );
}

export default App;
