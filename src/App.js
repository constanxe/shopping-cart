import TableItemRow from './components/TableItemRow';
import './App.css';

const item = {name: 'a', quantity: 2, price: 2.00};

function App() {
  return (
    <div className="App">
      <section>
        <header className="header">
          Your shopping cart 🛒
        </header>

        <table>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price ($)</th>
            <th>Action</th>
          </tr>

          <TableItemRow item={item}></TableItemRow>

          <tr>
            <td colSpan={2}><b>Total price ($):</b></td>
            <td>2.00</td>
          </tr>
        </table>
      </section>
    </div>
  );
}

export default App;
