import React, { useState, useEffect, useMemo } from 'react';
import ContactForm from './components/ContactForm';
import { Card } from './components/Card';
import { Alert } from './components/Alert';
import { Input } from './components/Input';
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

  // Initialize dark mode
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

  // Fetch Projects Data
  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        // Simulate a tiny network delay for realism
        await new Promise(resolve => setTimeout(resolve, 800));
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

  // Filter & Sort Logic
  const filteredAndSortedProjects = useMemo(() => {
    let result = [...projects];

    // 1. Arama Filtresi (Title, Description veya Tech içinde)
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some(tech => tech.toLowerCase().includes(q))
      );
    }

    // 2. Kategori Filtresi
    if (categoryFilter !== 'all') {
      result = result.filter(p => p.category === categoryFilter);
    }

    // 3. Sıralama
    result.sort((a, b) => {
      switch (sortOption) {
        case 'year-desc':
          return b.year - a.year; // Yeni olan en üstte
        case 'year-asc':
          return a.year - b.year; // Eski olan en üstte
        case 'title-asc':
          return a.title.localeCompare(b.title); // A'dan Z'ye alfabetik
        default:
          return 0;
      }
    });

    return result;
  }, [projects, searchQuery, categoryFilter, sortOption]);

  const categories: { value: Category; label: string }[] = [
    { value: 'all', label: 'Tümü' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Fullstack' }
  ];

  return (
    <div className="min-h-screen transition-colors duration-200">
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header className="bg-[#282c34] text-white py-4 px-4 shadow-md sticky top-0 z-40 dark:bg-gray-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">Ahmet Yılmaz - Portfolyo</h1>

          <div className="flex items-center gap-6">
            <nav aria-label="Ana navigasyon">
              <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-medium">
                <li><a href="#hakkimda" className="text-blue-200 hover:text-white">Hakkımda</a></li>
                <li><a href="#projeler" className="text-blue-200 hover:text-white">Projeler</a></li>
                <li><a href="#iletisim" className="text-blue-200 hover:text-white">İletişim</a></li>
              </ul>
            </nav>

            <button
              onClick={toggleDarkMode}
              aria-label="Tema Değiştir"
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 focus:ring-2 focus:ring-white transition-colors"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col gap-16 md:gap-24">

        <section id="hakkimda" className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-center">
          <figure className="mx-auto md:mx-0">
            <img src="https://via.placeholder.com/200" alt="Profil Fotoğrafı" className="rounded-full w-40 h-40 object-cover border-4 border-gray-100 shadow-md dark:border-gray-800" />
          </figure>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">Hakkımda</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Merhaba! LAB-5 altyapısıyla dinamik veri modellerini kullanan, State mimarisine tam entegre bir geliştirici portfolyosuna hoş geldiniz.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Kullandığım Teknolojiler</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 grid grid-cols-2 gap-2">
              <li>HTML5 & Tailwind CSS</li>
              <li>TypeScript, Fetch API</li>
              <li>React Hooks (useState, useEffect)</li>
              <li>GitHub & Modern İş Akışı</li>
            </ul>
          </div>
        </section>

        <section id="projeler">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-400">Projelerim</h2>

          {/* FİLTRE VE ARAMA KONTROLLERİ */}
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

          {/* İÇERİK DURUMU (LOADING / ERROR / EMPTY / DATA) */}
          {loading && (
            <div className="flex justify-center flex-col items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
              <p className="text-gray-600 dark:text-gray-400">Projeler yükleniyor...</p>
            </div>
          )}

          {error && !loading && (
            <Alert variant="error" title="Bağlantı Hatası">
              {error} - Lütfen sayfayı yenileyin.
            </Alert>
          )}

          {!loading && !error && filteredAndSortedProjects.length === 0 && (
            <Alert variant="warning" title="Bulunamadı">
              Kriterlerinize uygun bir proje bulunamadı. Lütfen aramayı değiştirin.
            </Alert>
          )}

          {!loading && !error && filteredAndSortedProjects.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredAndSortedProjects.map(project => (
                <Card key={project.id} variant="elevated">
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
              ))}
            </div>
          )}
        </section>

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

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-950 py-10 mt-auto border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-700 dark:text-gray-400">&copy; {new Date().getFullYear()} Ahmet Yılmaz. Tüm Hakları Saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
