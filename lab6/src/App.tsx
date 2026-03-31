import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FilterBar } from './components/FilterBar';
import { ProjectList } from './components/ProjectList';
import { ContactForm } from './components/ContactForm';
import { UIKit } from './UIKit';
import { Project, Category, SortOption } from './types';
import { fetchProjects } from './services/api';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Data States
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Filter & Sort States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<Category>('all');
  const [sortOption, setSortOption] = useState<SortOption>('year-desc');

  // Initialize Dark Mode State
  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  // Simulate remote loading on component mount
  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        await new Promise(resolve => setTimeout(resolve, 600)); // artifical delay
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Bilinmeyen bir hata oluştu');
        }
      } finally {
        setLoading(false);
      }
    };
    loadProjects();
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-200">
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      {/* Component 1: Application Header */}
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

      <main id="main-content" className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col gap-16 md:gap-24">

        {/* Component 2: About / Hero Content */}
        <Hero />

        <section id="projeler">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-400">Projelerim</h2>

          {/* Component 3: Data Controllers */}
          <FilterBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            sortOption={sortOption}
            setSortOption={setSortOption}
          />

          {/* Component 4 & 5: Project Rendering (useMemo optimized filtering & mapping) */}
          <ProjectList
            projects={projects}
            loading={loading}
            error={error}
            searchQuery={searchQuery}
            categoryFilter={categoryFilter}
            sortOption={sortOption}
          />
        </section>

        {/* Component 6: Controlled React Form */}
        <section id="iletisim" className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">İletişim</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
            Benimle çalışmak isterseniz aşağıdaki formu doldurarak mesaj bırakabilirsiniz.
          </p>
          <div className="w-full">
            <ContactForm />
          </div>
        </section>

      </main>

      {/* Lab 4 Extra UIKit renderer */}
      <UIKit />

      <footer className="bg-gray-100 dark:bg-gray-950 py-10 mt-auto border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-700 dark:text-gray-400">&copy; {new Date().getFullYear()} Ahmet Yılmaz. Tüm Hakları Saklıdır. (Checkpoint #1)</p>
        </div>
      </footer>
    </div>
  )
}

export default App
