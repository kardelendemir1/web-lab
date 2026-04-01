import React from 'react';

interface HeaderProps {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <header className="bg-[#282c34] text-white py-4 px-4 shadow-md sticky top-0 z-40 dark:bg-gray-950">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <h1 className="text-xl md:text-2xl font-bold tracking-tight">Ahmet Yılmaz - Portfolyo</h1>

                <div className="flex items-center gap-6">
                    <nav aria-label="Ana navigasyon">
                        <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-medium">
                            <li><a href="#hakkimda" className="text-blue-200 hover:text-white transition-colors">Hakkımda</a></li>
                            <li><a href="#projeler" className="text-blue-200 hover:text-white transition-colors">Projeler</a></li>
                            <li><a href="#iletisim" className="text-blue-200 hover:text-white transition-colors">İletişim</a></li>
                        </ul>
                    </nav>

                    <button
                        onClick={toggleDarkMode}
                        aria-label="Tema Değiştir"
                        className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
                    >
                        {isDarkMode ? '☀️' : '🌙'}
                    </button>
                </div>
            </div>
        </header>
    );
};
