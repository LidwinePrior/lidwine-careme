//components/Header.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DynamicText from '../components/DynamicText';

const Header = ({ onChangeLanguage, language }) => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/photos');
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

    return (
        <header>
            <div className="logo">
                {photos.length > 0 && (
                    <img src={photos[0].url} alt={photos[0].description} />
                )}
            </div>
            <nav>
                <a href="#home"><DynamicText textclass="header-home" language={language} /></a>
                <a href="#portfolio"><DynamicText textclass="header-portfolio" language={language} /></a>
                <a href="#about"><DynamicText textclass="header-about" language={language} /></a>
                <a href="#contact"><DynamicText textclass="header-contact" language={language} /></a>
            </nav>
            <div className="language-buttons">
                <button onClick={() => handleLanguageChange('fr')}>FR</button>
                <button onClick={() => handleLanguageChange('en')}>EN</button>
            </div>
        </header>
    );
};

export default Header;