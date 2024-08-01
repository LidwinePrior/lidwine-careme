//components/Footer.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SocialLinks from './SocialLinks';

const Footer = () => {
    const [photos, setPhotos] = useState([]);

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