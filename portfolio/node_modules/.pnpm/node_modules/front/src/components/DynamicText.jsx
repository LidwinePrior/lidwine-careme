import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DynamicText = ({ textclass, language }) => {
    const [textData, setTextData] = useState(null);

    useEffect(() => {
        const fetchTextData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/texts/${textclass}/${language}`);
                setTextData(response.data);
            } catch (error) {
                console.error('Error fetching text:', error);
            }
        };

        fetchTextData();
    }, [textclass, language]);


    const replacePlaceholders = (text) => {
        return text
            .replace('[GitHub]', '<a href="https://github.com/LidwinePrior" target="_blank" rel="noopener noreferrer">GitHub</a>')
            .replace('[LinkedIn]', '<a href="https://www.linkedin.com/in/lidwine-careme/" target="_blank" rel="noopener noreferrer">LinkedIn</a>')
            .replace('[ICI]', `<a href="https://drive.google.com/file/d/1aQmAyuy-TSq3vLaV7FSbH8wd3VthuL9b/view?usp=sharing" target="_blank" rel="noopener noreferrer">ICI</a>`)
            .replace('[HERE]', `<a href="https://drive.google.com/file/d/1aQmAyuy-TSq3vLaV7FSbH8wd3VthuL9b/view?usp=sharing" target="_blank" rel="noopener noreferrer">ICI</a>`);

    };


    if (!textData) {
        return <div>Loading...</div>;
    }

    return (
        <span dangerouslySetInnerHTML={{ __html: replacePlaceholders(textData.content) }} />
    );
};

export default DynamicText;
