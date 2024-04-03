// components/OrderForm.js
import React from 'react';

function OrderForm({ cart }) {
  return (
    <div className="order-form">
      <h2>Order Summary</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <h3>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</h3>
      <button>Place Order</button>
    </div>
  );
}

export default OrderForm;