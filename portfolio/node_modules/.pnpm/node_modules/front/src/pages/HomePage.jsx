//HomePage.jsx

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Presentation from '../pages/sections/Presentation';
import Portfolio from '../pages/sections/Portfolio';
import About from '../pages/sections/About';
import Contact from '../pages/sections/Contact';
import Footer from '../components/Footer';



const HomePage = () => {
    const [language, setLanguage] = useState('fr');

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };


    // Fonction pour faire défiler vers le haut de la page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        // Écoute du scroll pour afficher/masquer la flèche de retour en haut
        const handleScroll = () => {
            const backToTopButton = document.querySelector('.back-to-top');
            if (backToTopButton) {
                if (window.scrollY > 200) {
                    backToTopButton.style.display = 'block';
                } else {
                    backToTopButton.style.display = 'none';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <div className="home-page">
            <Header language={language} onChangeLanguage={handleLanguageChange} />
            <main>
                <Presentation language={language} />
                <Portfolio language={language} />
                <About language={language} />
                <Contact language={language} />
            </main>
            <Footer />
            <a href="#" className="back-to-top">&uarr;</a>
        </div>
    );
};

export default HomePage;