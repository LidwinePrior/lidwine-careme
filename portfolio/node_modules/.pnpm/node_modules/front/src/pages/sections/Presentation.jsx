//Pages/Presentation.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DynamicText from '../../components/DynamicText';


const Presentation = ({ language }) => {


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
        <section id="home" className="presentation-section">
            <h1><DynamicText textclass="presentation-title" language={language} /></h1>
            <div className="grid-presentation">
                <div className="div-subtitle">
                    <h2><DynamicText textclass="presentation-subtitle" language={language} /></h2>
                </div>
                <div className="image-ordi">
                    {photos.length > 0 && (
                        <img src={photos[1].url} alt={photos[1].description} />
                    )}
                </div>

                <div className="presentation-div-button">
                    {/* <button> */}
                    <a href="#about"><DynamicText textclass="presentation-button" language={language} /></a>
                    {/* </button> */}
                </div>
            </div>
        </section>
    );
};

export default Presentation;