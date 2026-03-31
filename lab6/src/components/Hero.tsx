import React from 'react';

export const Hero: React.FC = () => {
    return (
        <section id="hakkimda" className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-center">
            <figure className="mx-auto md:mx-0">
                <img
                    src="https://via.placeholder.com/200"
                    alt="Profil Fotoğrafı"
                    className="rounded-full w-40 h-40 object-cover border-4 border-gray-100 shadow-md dark:border-gray-800"
                />
            </figure>

            <div>
                <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">Hakkımda</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    Merhaba! LAB-6 altyapısıyla dinamik veri modellerini kullanan, State mimarisine tam entegre bir geliştirici portfolyosuna hoş geldiniz.
                </p>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Kullandığım Teknolojiler</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 grid grid-cols-2 gap-2">
                    <li>HTML5 & Tailwind CSS</li>
                    <li>TypeScript, Fetch API</li>
                    <li>React Hooks (useState, useEffect, useMemo)</li>
                    <li>GitHub & PR İş Akışı</li>
                </ul>
            </div>
        </section>
    );
};
