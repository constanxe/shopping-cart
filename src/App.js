import './App.css';

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

          <tr>
            <td>a</td>
            <td>2</td>
            <td>2.00</td>
            <td><button>Remove</button></td>
          </tr>

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
