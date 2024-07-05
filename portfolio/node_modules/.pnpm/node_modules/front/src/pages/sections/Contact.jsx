import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DynamicText from '../../components/DynamicText';
import Modal from '../../components/Modal';

const Contact = ({ language }) => {
    const [formData, setFormData] = useState({
        name: '',
        firstname: '',
        email: '',
        phone: '',
        message: ''
    });

    const [contactNamePlaceholder, setContactNamePlaceholder] = useState('');
    const [contactFirstnamePlaceholder, setContactFirstnamePlaceholder] = useState('');
    const [contactEmailPlaceholder, setContactEmailPlaceholder] = useState('');
    const [contactPhonePlaceholder, setContactPhonePlaceholder] = useState('');
    const [contactMessagePlaceholder, setContactMessagePlaceholder] = useState('');
    const [buttonSendText, setButtonSendText] = useState('');

    useEffect(() => {
        const fetchTexts = async () => {
            try {
                const response1 = await axios.get(`http://localhost:3000/api/texts/contact-name/${language}`);
                setContactNamePlaceholder(response1.data.content);

                const response2 = await axios.get(`http://localhost:3000/api/texts/contact-firstname/${language}`);
                setContactFirstnamePlaceholder(response2.data.content);

                const response3 = await axios.get(`http://localhost:3000/api/texts/contact-email/${language}`);
                setContactEmailPlaceholder(response3.data.content);

                const response4 = await axios.get(`http://localhost:3000/api/texts/contact-phone/${language}`);
                setContactPhonePlaceholder(response4.data.content);

                const response5 = await axios.get(`http://localhost:3000/api/texts/contact-message/${language}`);
                setContactMessagePlaceholder(response5.data.content);

                const response6 = await axios.get(`http://localhost:3000/api/texts/button-send/${language}`);
                setButtonSendText(response6.data.content);
            } catch (error) {
                console.error('Error fetching texts:', error);
            }
        };

        fetchTexts();
    }, [language]);

    const [errors, setErrors] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [showModal, setShowModal] = useState(false); // State pour gérer l'affichage du modal

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors([]);
        setSuccessMessage('');

        try {
            const response = await axios.post('http://localhost:3000/api/contact', formData);
            setSuccessMessage(response.data.message);
            setFormData({ name: '', firstname: '', email: '', phone: '', message: '' });
            setShowModal(true); // Afficher le modal en cas de succès
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                setErrors([{ msg: 'Server error' }]);
            }
        }
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <section id="contact" className="contact-form">
            <h2><DynamicText textclass="contact-title" language={language} /></h2>
            <form onSubmit={handleSubmit}>
                <div className="div-contact-name">
                    <input
                        type="text"
                        name="name"
                        placeholder={contactNamePlaceholder}
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="div-contact-firstname">
                    <input
                        type="text"
                        name="firstname"
                        placeholder={contactFirstnamePlaceholder}
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="div-contact-email">
                    <input
                        type="email"
                        name="email"
                        placeholder={contactEmailPlaceholder}
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="div-contact-phone">
                    <input
                        type="text"
                        name="phone"
                        placeholder={contactPhonePlaceholder}
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="div-contact-message">
                    <textarea
                        name="message"
                        placeholder={contactMessagePlaceholder}
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">{buttonSendText}</button>
            </form>
            <Modal
                showModal={showModal}
                closeModal={closeModal}
                errors={errors}
                successMessage={successMessage}
            />
        </section>
    );
};

export default Contact;
