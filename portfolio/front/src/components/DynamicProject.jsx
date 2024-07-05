//components/DynamicProject.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DynamicProject = ({ projectId, language }) => {
    const [project, setProject] = useState(null);

    useEffect(() => {
        const fetchProjectDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/project/${projectId}`);
                setProject(response.data);
            } catch (error) {
                console.error('Error fetching project details:', error);
            }
        };

        fetchProjectDetails();
    }, [projectId]);

    if (!project) {
        return <div>Loading...</div>;
    }

    // Trouver la description dans la langue spécifiée
    const descriptionObject = project.descriptions.find(desc => desc.language === language);
    const description = descriptionObject ? descriptionObject.description : 'Description not available';

    return (
        <div className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.imageUrl} alt={project.title} />
                <div className="overlay">
                    <h3>{project.title}</h3>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
};

export default DynamicProject;