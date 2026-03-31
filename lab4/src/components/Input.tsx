import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    error?: string;
    multiline?: boolean;
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    multiline = false,
    id,
    className = '',
    ...props
}) => {
    const baseInputClasses = "w-full border rounded-md p-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 transition-shadow";
    const normalClasses = "border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500";
    const errorClasses = "border-red-500 focus:ring-red-500 focus:border-red-500";

    const inputClass = `${baseInputClasses} ${error ? errorClasses : normalClasses} ${className}`;
    const inputId = id || `input-${label.replace(/\s+/g, '-').toLowerCase()}`;
    const errorId = `${inputId}-error`;

    return (
        <div className="flex flex-col gap-1 w-full">
            <label htmlFor={inputId} className="font-semibold text-gray-700 dark:text-gray-300">
                {label}
            </label>

            {multiline ? (
                <textarea
                    id={inputId}
                    className={inputClass}
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : undefined}
                    {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                />
            ) : (
                <input
                    id={inputId}
                    className={inputClass}
                    aria-invalid={!!error}
                    aria-describedby={error ? errorId : undefined}
                    {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                />
            )}

            {error && (
                <span id={errorId} className="text-sm text-red-600 dark:text-red-400 font-medium" role="alert">
                    {error}
                </span>
            )}
        </div>
    );
};
