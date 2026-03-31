import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Alert } from './Alert';

const ContactForm: React.FC = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.checkValidity()) {
            setErrorMessage('Lütfen formu eksiksiz ve geçerli formatta doldurun.');
            setSuccess(false);
        } else {
            setErrorMessage('');
            setSuccess(true);
            form.reset();
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col gap-6 w-full max-w-lg mx-auto">

            {success && (
                <Alert variant="success" title="Başarılı!">
                    Mesajınız başarıyla gönderildi.
                </Alert>
            )}

            {errorMessage && (
                <Alert variant="error" title="Hata">
                    {errorMessage}
                </Alert>
            )}

            <Input
                label="Ad Soyad:"
                type="text"
                name="user_name"
                required
                aria-required="true"
                error={errorMessage ? "Bu alan zorunludur" : undefined}
            />

            <Input
                label="E-Posta Adresiniz:"
                type="email"
                name="user_email"
                required
                aria-required="true"
                error={errorMessage ? "Geçerli bir e-posta girin" : undefined}
            />

            <Input
                label="Mesajınız:"
                name="user_message"
                multiline
                rows={5}
                required
                minLength={10}
                aria-required="true"
                error={errorMessage ? "Mesaj 10 karakterden uzun olmalıdır" : undefined}
            />

            <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
                Gönder
            </Button>
        </form>
    );
};

export default ContactForm;
