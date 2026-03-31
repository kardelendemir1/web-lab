import React from 'react';

type CardVariant = 'elevated' | 'outline';

interface CardProps {
    variant?: CardVariant;
    children: React.ReactNode;
    className?: string;
}

export const Card: React.FC<CardProps> = ({
    variant = 'elevated',
    children,
    className = ''
}) => {
    const baseClasses = "rounded-lg overflow-hidden bg-white dark:bg-gray-800 p-6 flex flex-col";

    const variantClasses = {
        elevated: "shadow-md hover:shadow-lg transition-shadow border border-transparent dark:border-gray-700",
        outline: "border-2 border-gray-200 dark:border-gray-700 shadow-none"
    };

    return (
        <article className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
            {children}
        </article>
    );
};
