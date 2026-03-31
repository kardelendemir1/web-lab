export type Category = 'all' | 'frontend' | 'fullstack' | 'backend';

export interface Project {
    id: string;
    title: string;
    description: string;
    category: Category;
    technologies: string[];
    year: number;
    imageUrl: string;
}

export type SortOption = 'year-desc' | 'year-asc' | 'title-asc';
