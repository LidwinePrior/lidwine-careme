import React, { useState } from 'react';
import axios from 'axios';

const AdminForm = () => {
    const [textclass, setTextclass] = useState('');
    const [textLanguage, setTextLanguage] = useState('');
    const [textContent, setTextContent] = useState('');
    const [projectTitle, setProjectTitle] = useState('');
    const [projectDescriptionFr, setProjectDescriptionFr] = useState('');
    const [projectDescriptionEn, setProjectDescriptionEn] = useState('');
    const [projectLink, setProjectLink] = useState('');
    const [projectImageUrl, setProjectImageUrl] = useState('');
    const [photoTitle, setPhotoTitle] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
    const [photoDescription, setPhotoDescription] = useState('');


    //ajouter un texte
    const handleTextSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/text', {
                textClass: textclass,
                language: textLanguage,
                content: textContent,
            });
            console.log('Text added:', response.data);
            setTextclass('');
            setTextLanguage('fr');
            setTextContent('');
        } catch (error) {
            console.error('Error adding text:', error);
        }
    };



    //ajouter un projet
    const handleProjectSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/project', {
                title: projectTitle,
                descriptions: [
                    {
                        language: 'fr',
                        description: projectDescriptionFr
                    },
                    {
                        language: 'en',
                        description: projectDescriptionEn
                    }
                ],
                link: projectLink,
                imageUrl: projectImageUrl
            });
            console.log('Data added:', response.data);
            // Réinitialisation des états
            setProjectTitle('');
            setProjectDescriptionFr('');
            setProjectDescriptionEn('');
            setProjectLink('');
            setProjectImageUrl('');
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };


    // ajouter une photo
    const handlePhotoSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/photo', {
                title: photoTitle,
                url: photoUrl,
                description: photoDescription,
            });
            console.log('Data added:', response.data);
            setPhotoTitle('');
            setPhotoUrl('');
            setPhotoDescription('');
        } catch (error) {
            console.error('Error adding data: ', error);
        }

    };

    return (
        <div className="AdminForm">
            <h1>Page Admin</h1>

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <section className="add-udpate-text">
                <h2>Ajouter un texte</h2>
                <form onSubmit={handleTextSubmit}>

                    <div className="text-class">
                        <label>Clé:</label>
                        <input
                            type="text"
                            value={textclass}
                            onChange={(e) => setTextclass(e.target.value)}
                            placeholder="Clé"
                            required
                        />
                    </div>


                    <div className="text-language">
                        <label>Langue:</label>
                        <select
                            value={textLanguage}
                            onChange={(e) => setTextLanguage(e.target.value)}
                            required
                        >
                            <option value="fr">Français</option>
                            <option value="en">English</option>
                        </select>
                    </div>

                    <div className="text-content">
                        <label>Contenu:</label>
                        <textarea
                            value={textContent}
                            onChange={(e) => setTextContent(e.target.value)}
                            placeholder="Contenu"
                            required
                        />
                    </div>


                    <button type="submit">Ajouter</button>
                </form>
            </section>



            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <section className="add-project">
                <h2>Ajouter un projet</h2>
                <form onSubmit={handleProjectSubmit}>
                    <div className="project-title">
                        <label>Titre:</label>
                        <input
                            type="text"
                            value={projectTitle}
                            onChange={(e) => setProjectTitle(e.target.value)}
                            placeholder="Titre"
                            required
                        />
                    </div>

                    <div className="project-description-fr">
                        <label>Description (français):</label>
                        <textarea
                            value={projectDescriptionFr}
                            onChange={(e) => setProjectDescriptionFr(e.target.value)}
                            placeholder="Description en français"
                            required
                        ></textarea>
                    </div>

                    <div className="project-description-en">
                        <label>Description (anglais):</label>
                        <textarea
                            value={projectDescriptionEn}
                            onChange={(e) => setProjectDescriptionEn(e.target.value)}
                            placeholder="Description en anglais"
                            required
                        ></textarea>
                    </div>

                    <div className="project-link">
                        <label>Lien:</label>
                        <input
                            type="url"
                            value={projectLink}
                            onChange={(e) => setProjectLink(e.target.value)}
                            placeholder="Lien URL"
                            required
                        />
                    </div>

                    <div className="project-image">
                        <label>Image URL:</label>
                        <input
                            type="text"
                            value={projectImageUrl}
                            onChange={(e) => setProjectImageUrl(e.target.value)}
                            placeholder="Image URL"
                            required
                        />
                    </div>

                    <button type="submit">Ajouter</button>
                </form>
            </section>

            {/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}
            <section className="add-photo">
                <h2>Ajouter une photo</h2>

                <form onSubmit={handlePhotoSubmit}>


                    <div className="photo-title">
                        <label>Titre:</label>
                        <input
                            type="text"
                            value={photoTitle}
                            onChange={(e) => setPhotoTitle(e.target.value)}
                            placeholder="Titre"
                            required
                        />
                    </div>


                    <div className="photo-link">
                        <label>Image URL:</label>
                        <input
                            type="text"
                            value={photoUrl}
                            onChange={(e) => setPhotoUrl(e.target.value)}
                            placeholder="URL"
                            required
                        />
                    </div>

                    <div className="photo-description">
                        <label>Description:</label>
                        <textarea
                            value={photoDescription}
                            onChange={(e) => setPhotoDescription(e.target.value)}
                            placeholder="Description"
                        />
                    </div>

                    <button type="submit">Ajouter</button>
                </form>
            </section>
        </div>
    );
};

export default AdminForm;