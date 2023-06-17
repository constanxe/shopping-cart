import Section from './components/Section';
import './App.css';

const product = { name: 'a', price: 2 };
const cartItem = { ...product, quantity: 2 };

function App() {
  return (
    <div className="App">
      <Section header="Products available 🛍" items={[product]}></Section>
      <Section header="Your shopping cart 🛒" items={[cartItem]}></Section>
    </div>
  );
}

export default App;
