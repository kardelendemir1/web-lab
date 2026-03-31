import React from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
    variant?: AlertVariant;
    title?: string;
    children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
    variant = 'info',
    title,
    children
}) => {
    const baseClasses = "p-4 rounded-md flex flex-col gap-1 border-l-4";

    const variantClasses = {
        info: "bg-blue-50 border-blue-500 text-blue-800 dark:bg-blue-900/30 dark:text-blue-200",
        success: "bg-green-50 border-green-500 text-green-800 dark:bg-green-900/30 dark:text-green-200",
        warning: "bg-yellow-50 border-yellow-500 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200",
        error: "bg-red-50 border-red-500 text-red-800 dark:bg-red-900/30 dark:text-red-200"
    };

    return (
        <div className={`${baseClasses} ${variantClasses[variant]}`} role="alert">
            {title && <strong className="font-bold">{title}</strong>}
            <span>{children}</span>
        </div>
    );
};
