import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import ContactPage from './pages/ContactPage';
import './styles/global.css';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/menu" component={MenuPage} />
                    <Route path="/order" component={OrderPage} />
                    <Route path="/contact" component={ContactPage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;