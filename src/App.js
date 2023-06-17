import Section from './components/Section';
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
      <Section header="Products available 🛍" items={products}></Section>
      <Section header="Your shopping cart 🛒" items={[cartItem]}></Section>
    </div>
  );
}

export default App;
