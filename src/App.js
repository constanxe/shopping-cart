import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';

import { Products, Cart, PageNotFound } from './views/index';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink to="/products">Products</NavLink> |&nbsp;
          <NavLink to="/cart">Cart</NavLink> |&nbsp;
          <NavLink to="/does-not-exist"><i>Catch all route</i></NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
