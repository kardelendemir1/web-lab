import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            setErrorMessage('Lütfen formu eksiksiz ve geçerli formatta doldurun.');
        } else {
            setErrorMessage('');
            alert('Mesajınız başarıyla gönderildi!');
            form.reset();
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            {/* noValidate stops the browser's default validation UI, so we can use aria-describedby and our custom message for screen readers */}
            <div className="form-group">
                <label htmlFor="user_name">Ad Soyad:</label>
                <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    aria-required="true"
                />
            </div>

            <div className="form-group">
                <label htmlFor="user_email">E-Posta Adresiniz:</label>
                <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    aria-required="true"
                />
            </div>

            <div className="form-group">
                <label htmlFor="user_message">Mesajınız:</label>
                <textarea
                    id="user_message"
                    name="user_message"
                    required
                    minLength={10}
                    aria-required="true"
                    rows={5}
                />
            </div>

            {/* Screen reader alert role for validation message */}
            <div role="alert" className="error-message">
                {errorMessage && <small>{errorMessage}</small>}
            </div>

            <button type="submit">Gönder</button>
        </form>
    );
};

export default ContactForm;
