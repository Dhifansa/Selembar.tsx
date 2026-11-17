// WhatsApp config
export const WA_NUMBER = '6281234567890';
export const WA_MESSAGE = 'Halo SELEMBAR! Saya tertarik dengan layanan kalian 😊';
export const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

// Layanan
export const SERVICES = [
  {
    id: 'undangan',
    icon: 'envelope',
    title: 'Undangan Digital',
    description: 'Undangan berbasis web untuk momen spesialmu. Elegan, praktis, dan mudah dibagikan.',
    price: 'Mulai dari Rp 99.000',
    cta: 'Pesan Undangan',
    waText: 'Halo SELEMBAR! Saya mau pesan Undangan Digital.',
  },
  {
    id: 'portofolio',
    icon: 'laptop',
    title: 'Portofolio Web',
    description: 'Tampilkan karya terbaikmu secara profesional dengan website portofolio yang responsif.',
    price: 'Mulai dari Rp 249.000',
    cta: 'Buat Portofolio',
    waText: 'Halo SELEMBAR! Saya mau buat Portofolio Web.',
  },
  {
    id: 'landing-page',
    icon: 'rocket',
    title: 'Landing Page',
    description: 'Halaman pemasaran yang didesain khusus untuk meningkatkan konversi bisnismu.',
    price: 'Mulai dari Rp 399.000',
    cta: 'Buat Landing Page',
    waText: 'Halo SELEMBAR! Saya mau buat Landing Page bisnis.',
  },
];

// Portofolio
export const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: 'Leafy Cookies',
    category: 'landing-page',
    thumbnail: '/projek/leafycookies.webp',
    liveUrl: 'https://leafycookies.vercel.app/',
  },
  {
    id: 2,
    title: 'Portofolio Dhifansa Prdibtya Rafi',
    category: 'portofolio',
    thumbnail: '/Portofolio.webp',
    liveUrl: 'https://dhifansa-porto.vercel.app/',
  },
  {
    id: 3,
    title: 'Stora Web App',
    category: 'landing-page',
    thumbnail: '/projek/Stora.webp',
    liveUrl: 'https://stora-app.vercel.app',
  },
  {
    id: 4,
    title: 'UMKM Digital Showcase',
    category: 'landing-page',
    thumbnail: '/projek/UMKM.webp',
    liveUrl: 'https://umkm.aksivastudio.id/',
  },
  {
    id: 5,
    title: 'Univora Platform',
    category: 'portofolio',
    thumbnail: '/projek/Univora.webp',
    liveUrl: 'https://pikrih.vercel.app',
  },
  {
    id: 6,
    title: 'Warasin Health Web',
    category: 'landing-page',
    thumbnail: '/projek/Warasin.webp',
    liveUrl: 'https://warasin.vercel.app',
  },
];

// Testimoni
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Siska & Reza',
    service: 'Undangan Pernikahan',
    quote: 'Hasilnya sangat memuaskan! Desain elegan dan tamu undangan gampang buka webnya. Proses pembuatannya juga cepat banget.',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 2,
    name: 'Bima Satria',
    service: 'Portofolio Web',
    quote: 'Sejak punya web portofolio dari Selembar, klien lebih gampang melihat hasil foto-foto saya. Desainnya premium!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
  },
  {
    id: 3,
    name: 'Toko Kopi Sudut',
    service: 'Landing Page',
    quote: 'Konversi promo akhir tahun kami naik drastis sejak pakai landing page khusus. Sangat direkomendasikan untuk UMKM.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150',
  },
];

// Social proof angka
export const STATS = [
  { label: 'Klien Puas', value: '500+' },
  { label: 'Undangan Dibuat', value: '1200+' },
  { label: 'Proyek Selesai', value: '850+' },
  { label: 'Rating', value: '5.0 ⭐' },
];

// Kenapa Kami (Why Us)
export const WHY_US = [
  {
    id: 1,
    title: 'Proses Mudah & Cepat',
    description: 'Hanya butuh 1-3 hari kerja, undangan atau website Anda siap diluncurkan.',
    icon: 'lightning',
  },
  {
    id: 2,
    title: 'Desain Personal',
    description: 'Desain disesuaikan dengan tema dan karakter Anda, tidak asal pakai template.',
    icon: 'palette',
  },
  {
    id: 3,
    title: 'Revisi Sampai Puas',
    description: 'Kami pastikan hasil akhir 100% sesuai dengan ekspektasi Anda.',
    icon: 'check',
  },
  {
    id: 4,
    title: 'Harga Transparan',
    description: 'Tidak ada biaya tersembunyi. Anda hanya bayar sesuai paket yang dipilih.',
    icon: 'tag',
  },
];
