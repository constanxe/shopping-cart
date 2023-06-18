import { Products, Cart } from './views/index';

import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <Products />
      </section>

      <section>
        <Cart />
      </section>
    </div>
  );
}

export default App;
