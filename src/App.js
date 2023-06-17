import { ProductsProvider } from './context/index';

import Header from './components/Header';
import TableItems from './components/TableItems';
import './App.css';

const products = [
  { name: 'A', price: 1 },
  { name: 'B', price: 2 },
  { name: 'C', price: 3 }
];
const cartItem = { ...products[0], quantity: 2 };

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <section>
          <Header header="Products available 🛍"></Header>
          <TableItems items={products}></TableItems>
        </section>
      </ProductsProvider>

      <section>
        <Header header="Your shopping cart 🛒"></Header>
        <TableItems items={[cartItem]}></TableItems>
      </section>
    </div>
  );
}

export default App;
