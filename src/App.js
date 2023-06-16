import TableItems from './components/TableItems';
import './App.css';

function App() {
  return (
    <div className="App">
      <section>
        <header className="header">
          Your shopping cart 🛒
        </header>

          <tr>
        <TableItems></TableItems>
      </section>
    </div>
  );
}

export default App;
