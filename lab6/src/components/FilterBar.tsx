import React from 'react';
import type { Category, SortOption } from '../types';
import { Input } from './Input';

interface FilterBarProps {
    searchQuery: string;
    setSearchQuery: (val: string) => void;
    categoryFilter: Category;
    setCategoryFilter: (val: Category) => void;
    sortOption: SortOption;
    setSortOption: (val: SortOption) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
    searchQuery,
    setSearchQuery,
    categoryFilter,
    setCategoryFilter,
    sortOption,
    setSortOption
}) => {
    const categories: { value: Category; label: string }[] = [
        { value: 'all', label: 'Tümü' },
        { value: 'frontend', label: 'Frontend' },
        { value: 'backend', label: 'Backend' },
        { value: 'fullstack', label: 'Fullstack' }
    ];

    return (
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 mb-8 flex flex-col lg:flex-row gap-4 items-end">

            <div className="w-full lg:w-1/3">
                <Input
                    label="Proje Ara"
                    placeholder="İsim veya teknoloji..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="w-full lg:w-1/3 flex flex-col gap-1">
                <label className="font-semibold text-gray-700 dark:text-gray-300">Kategori</label>
                <div className="flex gap-2 flex-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat.value}
                            onClick={() => setCategoryFilter(cat.value)}
                            className={`px-3 py-1.5 text-sm rounded-md transition-colors ${categoryFilter === cat.value
                                ? 'bg-blue-600 text-white'
                                : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-1/3 flex flex-col gap-1">
                <label htmlFor="sortSelect" className="font-semibold text-gray-700 dark:text-gray-300">Sıralama</label>
                <select
                    id="sortSelect"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value as SortOption)}
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                    <option value="year-desc">En Yeni (Yıla Göre Azalan)</option>
                    <option value="year-asc">En Eski (Yıla Göre Artan)</option>
                    <option value="title-asc">A'dan Z'ye (İsme Göre)</option>
                </select>
            </div>
        </div>
    );
};
