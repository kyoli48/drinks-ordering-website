// components/Menu.js
import React from 'react';

function Menu({ addToCart }) {
  const menuItems = [
    { id: 1, name: 'Classic Milk Tea', price: 4.50 },
    { id: 2, name: 'Boba (Tapioca Pearls)', price: 0.50 }
  ];

  return (
    <div className="menu">
      <h2>Menu</h2>
      <ul>
        {menuItems.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span>${item.price.toFixed(2)}</span>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;