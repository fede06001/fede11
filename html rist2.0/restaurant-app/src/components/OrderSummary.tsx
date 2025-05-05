import React from 'react';

interface OrderItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
}

interface OrderSummaryProps {
    items: OrderItem[];
    totalPrice: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, totalPrice }) => {
    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
    );
};

export default OrderSummary;