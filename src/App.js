import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { Products, Cart } from './views/index';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
