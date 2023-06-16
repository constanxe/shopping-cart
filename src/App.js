import Section from './components/Section';
import './App.css';

function App() {
  return (
    <div className="App">
      <Section type="products" header="Products available 🛍"></Section>
      <Section type="cart" header="Your shopping cart 🛒"></Section>
    </div>
  );
}

export default App;
