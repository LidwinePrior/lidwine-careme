//components/Header.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DynamicText from '../components/DynamicText';

const Header = ({ onChangeLanguage, language }) => {
    const [photos, setPhotos] = useState([]);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get('https://fast-beyond-92188-6197aa3c7d6f.herokuapp.com/api/photos');
                setPhotos(response.data);
            } catch (error) {
                console.error('Error fetching photos:', error);
            }
        };

        fetchPhotos();
    }, []);

    const handleLanguageChange = (newLanguage) => {
        onChangeLanguage(newLanguage);
    };


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>
            <div className="logo">
                {photos.length > 0 && (
                    <img src={photos[0].url} alt={photos[0].description} />
                )}
            </div>
            <nav className={menuOpen ? 'open' : ''}>
                <div className="nav-links">
                    <a href="#home" onClick={() => setMenuOpen(false)}>
                        <DynamicText textclass="header-home" language={language} />
                    </a>
                    <a href="#portfolio" onClick={() => setMenuOpen(false)}>
                        <DynamicText textclass="header-portfolio" language={language} />
                    </a>
                    <a href="#about" onClick={() => setMenuOpen(false)}>
                        <DynamicText textclass="header-about" language={language} />
                    </a>
                    <a href="#contact" onClick={() => setMenuOpen(false)}>
                        <DynamicText textclass="header-contact" language={language} />
                    </a>
                </div>
                <div className="menu-toggle" id="menu-toggle" onClick={toggleMenu}>
                    ☰
                </div>
            </nav>
            <div className="language-buttons">
                <button onClick={() => handleLanguageChange('fr')}>FR</button>
                <button onClick={() => handleLanguageChange('en')}>EN</button>
            </div>
        </header>
    );
};

export default Header;