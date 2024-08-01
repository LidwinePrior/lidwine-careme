import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DynamicText from '../../components/DynamicText';
import DynamicProject from '../../components/DynamicProject';


const Portfolio = ({ language }) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('https://fast-beyond-92188-6197aa3c7d6f.herokuapp.com/api/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="portfolio" className="projects-section">
            <h2><DynamicText textclass="portfolio-title" language={language} /></h2>
            <div className="projects">
                {projects.map((project) => (
                    <DynamicProject key={project._id} projectId={project._id} language={language} />
                ))}
            </div>

        </section>

    );

};

export default Portfolio;

