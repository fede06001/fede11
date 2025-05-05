import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import ReservationForm from '../components/ReservationForm';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>Welcome to Our Restaurant</h1>
                <p>Experience the best dining with us!</p>
                <h2>Our Menu Highlights</h2>
                <Menu />
                <h2>Make a Reservation</h2>
                <ReservationForm />
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;