import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './Pages/HomePage';
import PortfolioPage from './Pages/Portafolio';
import ContactPage from './Pages/Contacto';

function AppRouter() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/portafolio" element={<PortfolioPage />} />
                <Route path="/contacto" element={<ContactPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRouter;
