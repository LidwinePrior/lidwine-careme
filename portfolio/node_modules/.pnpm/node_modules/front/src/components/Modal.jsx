import React from 'react';

const Modal = ({ showModal, closeModal, errors, successMessage }) => {
    if (!showModal) {
        return null; // Si showModal est false, ne rend pas le modal
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <div className="succes-failed-text">
                    {errors.length > 0 && (
                        <div className="failed-text">
                            {errors.map((error, index) => (
                                <p key={index} style={{ color: 'red' }}>{error.msg}</p>
                            ))}
                        </div>
                    )}
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                </div>
            </div>
        </div>
    );
};

export default Modal;
