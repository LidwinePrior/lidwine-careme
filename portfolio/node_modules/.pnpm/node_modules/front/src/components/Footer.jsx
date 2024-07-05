//components/Footer.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SocialLinks from './SocialLinks';

const Footer = () => {
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
    return (
        <footer>
            <div className="logo">
                {photos.length > 0 && (
                    <img src={photos[0].url} alt={photos[0].description} />
                )}
            </div>

            <div className="reseaux">
                <SocialLinks />
            </div>
        </footer>
    );
};


export default Footer;