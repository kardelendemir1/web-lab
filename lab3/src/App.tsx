import ContactForm from './components/ContactForm'
import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ana içeriğe atla</a>

      <header>
        <div className="header-container">
          <h1>Ahmet Yılmaz - Kişisel Portfolyo</h1>
          <nav aria-label="Ana navigasyon">
            <ul>
              <li><a href="#hakkimda">Hakkımda</a></li>
              <li><a href="#projeler">Projeler</a></li>
              <li><a href="#iletisim">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <figure>
            <img src="https://via.placeholder.com/150" alt="Ahmet Yılmaz'ın vesikalık fotoğrafı" />
            <figcaption>Ahmet Yılmaz</figcaption>
          </figure>
          <div>
            <p>
              Merhaba! Ben Ahmet. Web tasarımı ve programlama tutkunuyum. Erişilebilirlik (a11y) standartlarına uygun, kullanıcı dostu ve modern web arayüzleri geliştiriyorum. Sürekli öğrenmeye ve kendimi geliştirmeye odaklanıyorum.
            </p>
            <h3>Kullandığım Teknolojiler</h3>
            <ul>
              <li>HTML5 (Semantik)</li>
              <li>CSS3 / CSS Grid / Flexbox</li>
              <li>JavaScript (ES6+)</li>
              <li>React & TypeScript</li>
            </ul>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>

          <div className="project-grid">
            <article className="project-card">
              <h3>E-Ticaret Sitesi</h3>
              <img src="https://via.placeholder.com/400x200" alt="E-Ticaret uygulamasının ürün listeleme ekranı" />
              <p>React, Redux ve Tailwind CSS kullanılarak geliştirilmiş, tamamen responsive ve erişilebilir bir e-ticaret platformu.</p>
              <p><strong>Kullanılan Teknolojiler:</strong> React, Redux, Vite, CSS</p>
            </article>

            <article className="project-card">
              <h3>Blog Uygulaması</h3>
              <img src="https://via.placeholder.com/400x200" alt="Kişisel blog uygulamasının anasayfa görünümü" />
              <p>Gelişmiş içerik yönetimi, karanlık mod desteği ve SEO optimizasyonlu kişisel blog sistemi.</p>
              <p><strong>Kullanılan Teknolojiler:</strong> HTML Semantik, Vanilla CSS, JS</p>
            </article>

            {/* Added a 3rd Dummy card so Grid Auto-Fit looks better on Desktop */}
            <article className="project-card">
              <h3>Hava Durumu Uygulaması</h3>
              <img src="https://via.placeholder.com/400x200" alt="Gerçek zamanlı hava durumu radarı" />
              <p>Bulunulan konuma göre OpenWeather API üzerinden veri çekip gösteren dinamik hava durumu görüntüleyici.</p>
              <p><strong>Kullanılan Teknolojiler:</strong> React, Fetch API, Flexbox</p>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <p>Benimle çalışmak isterseniz aşağıdaki formu doldurarak mesaj bırakabilirsiniz.</p>
          <ContactForm />
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Ahmet Yılmaz. Tüm Hakları Saklıdır.</p>
        <div className="social-links">
          <a href="#" aria-label="GitHub profilime git">GitHub</a>
          <a href="#" aria-label="LinkedIn profilime git">LinkedIn</a>
          <a href="#" aria-label="Twitter hesabıma git">Twitter</a>
        </div>
      </footer>
    </>
  )
}

export default App
