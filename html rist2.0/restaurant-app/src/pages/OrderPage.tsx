import React from 'react';
import OrderSummary from '../components/OrderSummary';
import ReservationForm from '../components/ReservationForm';

const OrderPage: React.FC = () => {
    return (
        <div className="order-page">
            <h1>Review Your Order</h1>
            <OrderSummary />
            <h2>Make a Reservation</h2>
            <ReservationForm />
        </div>
    );
};

export default OrderPage;