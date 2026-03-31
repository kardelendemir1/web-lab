import React, { useMemo } from 'react';
import type { Project, Category, SortOption } from '../types';
import { ProjectCard } from './ProjectCard';
import { Alert } from './Alert';

interface ProjectListProps {
    projects: Project[];
    loading: boolean;
    error: string | null;
    searchQuery: string;
    categoryFilter: Category;
    sortOption: SortOption;
}

export const ProjectList: React.FC<ProjectListProps> = ({
    projects,
    loading,
    error,
    searchQuery,
    categoryFilter,
    sortOption
}) => {

    const filteredAndSortedProjects = useMemo(() => {
        let result = [...projects];

        if (searchQuery.trim() !== '') {
            const q = searchQuery.toLowerCase();
            result = result.filter(p =>
                p.title.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                p.technologies.some(tech => tech.toLowerCase().includes(q))
            );
        }

        if (categoryFilter !== 'all') {
            result = result.filter(p => p.category === categoryFilter);
        }

        result.sort((a, b) => {
            switch (sortOption) {
                case 'year-desc':
                    return b.year - a.year;
                case 'year-asc':
                    return a.year - b.year;
                case 'title-asc':
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });

        return result;
    }, [projects, searchQuery, categoryFilter, sortOption]);

    if (loading) {
        return (
            <div className="flex justify-center flex-col items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
                <p className="text-gray-600 dark:text-gray-400">Projeler yükleniyor...</p>
            </div>
        );
    }

    if (error) {
        return (
            <Alert variant="error" title="Bağlantı Hatası">
                {error} - Lütfen sayfayı yenileyin.
            </Alert>
        );
    }

    if (filteredAndSortedProjects.length === 0) {
        return (
            <Alert variant="warning" title="Bulunamadı">
                Kriterlerinize uygun bir proje bulunamadı. Lütfen aramayı değiştirin.
            </Alert>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredAndSortedProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
};
