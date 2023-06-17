import { CartProvider, useCart } from './state/CartContext';
import { products } from './state/Products';

import Header from './components/Header';
import TableItems from './components/TableItems';
import './App.css';

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
