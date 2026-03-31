import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import { Alert } from './Alert';

interface FormData {
    user_name: string;
    user_email: string;
    user_message: string;
}

interface FormErrors {
    user_name?: string;
    user_email?: string;
    user_message?: string;
}

export const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ user_name: '', user_email: '', user_message: '' });
    const [errors, setErrors] = useState<FormErrors>({});
    const [success, setSuccess] = useState(false);

    // Controlled component handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear the error for this field
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
        setSuccess(false);
    };

    // React-based validation algorithm
    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (formData.user_name.trim().length < 3) {
            newErrors.user_name = 'Adınız en az 3 karakter olmalıdır.';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.user_email)) {
            newErrors.user_email = 'Lütfen geçerli bir e-posta formatı girin.';
        }

        if (formData.user_message.trim().length < 10) {
            newErrors.user_message = 'Mesajınız çok kısa, en az 10 karakter olmalıdır.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent native HTML submission payload

        const isValid = validateForm();

        if (isValid) {
            setSuccess(true);
            setErrors({});
            // Simulate submission clear
            setFormData({ user_name: '', user_email: '', user_message: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col gap-6 w-full max-w-lg mx-auto">

            {success && (
                <Alert variant="success" title="Başarılı!">
                    Mesajınız tarafıma başarıyla ulaştı. En kısa sürede geri dönüş yapacağım.
                </Alert>
            )}

            {Object.keys(errors).length > 0 && (
                <Alert variant="error" title="Form Hatası">
                    Lütfen formdaki işaretli hataları düzeltip tekrar deneyin.
                </Alert>
            )}

            <Input
                label="Ad Soyad:"
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                aria-required="true"
                error={errors.user_name}
            />

            <Input
                label="E-Posta Adresiniz:"
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                aria-required="true"
                error={errors.user_email}
            />

            <Input
                label="Mesajınız:"
                name="user_message"
                multiline
                rows={5}
                value={formData.user_message}
                onChange={handleChange}
                aria-required="true"
                error={errors.user_message}
            />

            <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
                Gönder
            </Button>
        </form>
    );
};

export default ContactForm;
