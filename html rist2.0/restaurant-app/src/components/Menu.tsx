import React from 'react';

const Menu = () => {
    const menuItems = [
        { id: 1, name: 'Spaghetti Carbonara', price: 12.99 },
        { id: 2, name: 'Margherita Pizza', price: 10.99 },
        { id: 3, name: 'Caesar Salad', price: 8.99 },
        { id: 4, name: 'Tiramisu', price: 6.99 },
        { id: 5, name: 'Panna Cotta', price: 5.99 },
    ];

    return (
        <div className="menu">
            <h2>Our Menu</h2>
            <ul>
                {menuItems.map(item => (
                    <li key={item.id}>
                        {item.name} - ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;