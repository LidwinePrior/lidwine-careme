import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DynamicText from '../../components/DynamicText';


const About = ({ language }) => {
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
        <section id="about" className="about-section">
            <h2><DynamicText textclass="about-title" language={language} /></h2>
            <div className="about-content">
                <div className="about-paragraphs">
                    <p><DynamicText textclass="about-text-intro" language={language} /></p>
                    <p><DynamicText textclass="about-text-qualities" language={language} /></p>
                    <p><DynamicText textclass="about-text-route" language={language} /></p>
                </div>
                <div className="image-me">
                    {photos.length > 0 && (
                        <img src={photos[2].url} alt={photos[2].description} />
                    )}
                </div>
            </div>
        </section>
    );

};

export default About;
