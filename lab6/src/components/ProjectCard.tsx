import React from 'react';
import type { Project } from '../types';
import { Card } from './Card';

interface ProjectCardProps {
    project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <Card variant="elevated">
            <img src={project.imageUrl} alt={project.title} className="rounded-md mb-4 w-full aspect-video object-cover" />
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    {project.year}
                </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow text-sm leading-relaxed">{project.description}</p>

            <div className="mt-auto flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 dark:border-gray-700">
                {project.technologies.map((tech, index) => (
                    <span key={index} className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        {tech}
                    </span>
                ))}
            </div>
        </Card>
    );
};
