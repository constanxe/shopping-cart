import { useCart } from './store/cart/CartContext';
import { products } from './store/products/Products';

import Header from './components/Header';
import TableItems from './components/TableItems';

import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <Header>Products available 🛍</Header>
        <TableItems items={products}></TableItems>
      </section>

      <section>
        <Header>Your shopping cart 🛒</Header>
        <TableItems items={useCart()}></TableItems>
      </section>
    </div>
  );
}

export default App;
