import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import { Card } from './components/Card';
import { UIKit } from './UIKit';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage or system theme on load
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

  return (
    <div className="min-h-screen transition-colors duration-200">
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header className="bg-[#282c34] text-white py-4 px-4 shadow-md sticky top-0 z-40 transition-colors dark:bg-gray-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight">Ahmet Yılmaz - Portfolyo</h1>

          <div className="flex items-center gap-6">
            <nav aria-label="Ana navigasyon">
              <ul className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-medium">
                <li><a href="#hakkimda" className="text-blue-200 hover:text-white hover:underline focus:ring-2 focus:ring-blue-300 rounded outline-none p-1">Hakkımda</a></li>
                <li><a href="#projeler" className="text-blue-200 hover:text-white hover:underline focus:ring-2 focus:ring-blue-300 rounded outline-none p-1">Projeler</a></li>
                <li><a href="#iletisim" className="text-blue-200 hover:text-white hover:underline focus:ring-2 focus:ring-blue-300 rounded outline-none p-1">İletişim</a></li>
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

      <main id="main-content" className="max-w-6xl mx-auto px-4 py-12 md:py-20 flex flex-col gap-16 md:gap-24">

        {/* Hakkımda Bölümü */}
        <section id="hakkimda" className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-center">
          <figure className="mx-auto md:mx-0">
            <img
              src="https://via.placeholder.com/200"
              alt="Ahmet Yılmaz'ın vesikalık fotoğrafı"
              className="rounded-full w-40 h-40 object-cover border-4 border-gray-100 shadow-md dark:border-gray-800"
            />
          </figure>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">Hakkımda</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Merhaba! Ben Ahmet. Web tasarımı ve programlama tutkunuyum. Erişilebilirlik (a11y) standartlarına uygun, kullanıcı dostu ve modern web arayüzleri geliştiriyorum. Tailwind CSS felsefesiyle tasarımlarımı modüler bir hale getiriyorum.
            </p>

            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Kullandığım Teknolojiler</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <li>HTML5 (Semantik) & A11y</li>
              <li>Tailwind CSS (Utility-First)</li>
              <li>JavaScript (ES6+)</li>
              <li>React & TypeScript</li>
            </ul>
          </div>
        </section>

        {/* Projeler Bölümü - Grid Kart Mimarisi */}
        <section id="projeler">
          <h2 className="text-3xl font-bold mb-8 text-blue-700 dark:text-blue-400">Projelerim</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card variant="elevated">
              <img src="https://via.placeholder.com/400x200" alt="E-Ticaret uygulaması" className="rounded-md mb-4 w-full aspect-video object-cover" />
              <h3 className="text-xl font-bold mb-2">E-Ticaret Sitesi</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">React, Redux ve Tailwind CSS kullanılarak geliştirilmiş, tamamen responsive e-ticaret platformu.</p>
              <p className="text-sm font-medium mt-auto text-blue-800 dark:text-blue-300">Teknolojiler: React, Redux, Tailwind</p>
            </Card>

            <Card variant="outline">
              <img src="https://via.placeholder.com/400x200" alt="Blog uygulaması" className="rounded-md mb-4 w-full aspect-video object-cover" />
              <h3 className="text-xl font-bold mb-2">Kişisel Blog</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">Gelişmiş içerik yönetimi ve karanlık mod desteğine sahip SEO uyumlu bir blog sistemi.</p>
              <p className="text-sm font-medium mt-auto text-blue-800 dark:text-blue-300">Teknolojiler: HTML, Tailwind, JS</p>
            </Card>

            <Card variant="elevated">
              <img src="https://via.placeholder.com/400x200" alt="Hava Durumu Radarı" className="rounded-md mb-4 w-full aspect-video object-cover" />
              <h3 className="text-xl font-bold mb-2">Hava Durumu</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">Açık hava durumu API'si üzerinden veri çekip anlık radarı veren bir mobil-first web uygulaması.</p>
              <p className="text-sm font-medium mt-auto text-blue-800 dark:text-blue-300">Teknolojiler: React, Fetch API, Tailwind</p>
            </Card>
          </div>
        </section>

        {/* İletişim Formu */}
        <section id="iletisim" className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-400">İletişim</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
            Benimle çalışmak isterseniz aşağıdaki formu doldurarak mesaj bırakabilirsiniz. Size en kısa sürede dönüş yapacağım.
          </p>
          <div className="w-full">
            <ContactForm />
          </div>
        </section>

      </main>

      {/* Ekstra UI Kit Render Bölümü */}
      <UIKit />

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-950 py-10 mt-auto border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-700 dark:text-gray-400 font-medium">&copy; {new Date().getFullYear()} Ahmet Yılmaz. Tüm Hakları Saklıdır.</p>
          <div className="mt-6 flex justify-center gap-6">
            <a href="#" aria-label="GitHub profilime git" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-bold transition-colors">GitHub</a>
            <a href="#" aria-label="LinkedIn profilime git" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-bold transition-colors">LinkedIn</a>
            <a href="#" aria-label="Twitter hesabıma git" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-bold transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
