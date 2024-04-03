// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import OrderForm from './components/OrderForm';
import './App.css';

function App() {
  const [cart, setCart] = useState([]); // cart initialized w empty array, setCart function updates cart

  
  const addToCart = (item) => { // define fx to add item to cart
    setCart([...cart, item]); // setCart fx spreads existing card and appends new item
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Menu addToCart={addToCart} /> {/* addToCart fx is passed to Menu component as prop */}
        <OrderForm cart={cart} /> {/* cart state is passed to OrderForm component as prop */}
      </div>
    </div>
  );
}

export default App;