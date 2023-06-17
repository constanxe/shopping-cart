import { CartProvider, useCart } from './context/CartContext';

import Header from './components/Header';
import TableItems from './components/TableItems';
import './App.css';

const products = [
  { name: 'A', price: 1 },
  { name: 'B', price: 2 },
  { name: 'C', price: 3 }
];

function App() {
  return (
    <div className="App">
      <section>
        <Header header="Products available 🛍"></Header>
        <TableItems items={products}></TableItems>
      </section>

      <CartProvider>
        <section>
          <Header header="Your shopping cart 🛒"></Header>
          <TableItems items={useCart()}></TableItems>
        </section>
      </CartProvider>
    </div>
  );
}

export default App;
