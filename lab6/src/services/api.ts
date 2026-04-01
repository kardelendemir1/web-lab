import type { Project } from '../types';

export async function fetchProjects(): Promise<Project[]> {
    try {
        const response = await fetch('/data/projects.json');
        if (!response.ok) {
            throw new Error(`HTTP Hata: ${response.status}`);
        }
        const data: Project[] = await response.json();
        return data;
    } catch (error) {
        console.error('Projeler fetch edilirken hata oluştu:', error);
        throw error;
    }
}
