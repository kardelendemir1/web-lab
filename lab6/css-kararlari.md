# LAB-3 CSS Tasarım Kararları

Bu döküman, projedeki "Mobile-first", "Fluid Typography" ve "Tasarım Sistemi" (Design Tokens) kurgularına yönelik karar ve tercihleri açıklamaktadır.

## 1. Design Tokens (Tasarım Değişkenleri)
`src/styles/tokens.css` içerisinde `:root` alanına özel özellikler (`--color-primary`, `--space-md` vb.) tanımlanmıştır. Amaç, uygulamanın tamamında renk ve boşluk dengesini %100 istikrarlı (consistent) tutmaktır. Ayrıca ileride Karanlık Mod (Dark Mode) gibi eklentilerin yalnızca buradaki değişkenler değiştirilerek uygulanabilmesi hedeflenmiştir.

## 2. Fluid Typography (Akışkan Tipografi)
Font boyutlarında sabit pikseller yerine `clamp()` metodu kullanılarak akıcı bir tipografi geçişi oluşturulmuştur.
Örnek: `clamp(1rem, 0.95rem + 0.25vw, 1.125rem);`
Bu kullanım, küçük ekranlarda `1rem` seviyesinde dururken ekran genişledikçe tarayıcı izafiyetine (`vw`) göre `1.125rem`'e kadar pürüzsüz bir büyüme sunar. Bu da media-query gerektirmeden tam duyarlılık sağlar.

## 3. Responsive Layout
* **Navigasyon ve Header (Flexbox):**
  Header yapısında, küçük ekranlarda Logo ve Menü bağlantılarının alt alta durması için `flex-direction: column` kullanılmıştır (Mobile-first). Ekran `640px`'i (Tablet barajı) geçince ise `@media (min-width: 640px)` sorgusu ile `flex-direction: row;` (yan yana) olarak ayarlanarak kullanılabilir (usable) geniş alandan tasarruf sağlanmıştır.
* **Proje Kartları (CSS Grid):**
  Proje listesi için CSS Grid kullanılmıştır. Kartlar `.project-grid` olarak bir kapsayıcı ile sarmalanmış ve `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr))` kullanılmıştır. Bu tasarım tercihiyle, ekstra media sorgusu yazmadan (tarayıcı genişliği hesabı grid'e bırakılarak) kart sayısı cihaz enine göre otomatik belirlenmektedir. Dar cihazda `1fr` olarak 1 kart listelenir, geniş cihazda yan yana asgari `280px` ebatlarında uzanan en az 3 karta kadar listelenilebilmektedir.

Böylece modern, kod tekrarından arındırılmış ve temiz stilde profesyonel bir sayfa elde edilmiştir.
