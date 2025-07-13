// backend/data.js

export const educationHistory = [
  { id: 1, period: '2011 - 2012', institution: 'SD Kendari', major: 'Kelas 1 semester 1' },
  { id: 2, period: '2012 - 2015', institution: 'SD Negeri 007 Samarinda Seberang', major: 'Kelas 1 semester 2 - Kelas 5 semester 2' },
  { id: 3, period: '2015 - 2016', institution: 'SD Mangkukusuman 5 Tegal', major: 'Kelas 6 semester 1' },
  { id: 4, period: '2016 - 2017', institution: 'SD Negeri Manyaran 03 Semarang', major: 'Kelas 6 semester 2' },
  { id: 5, period: '2017 - 2020', institution: 'SMP IT Insan Cendekia Semarang', major: '-' },
  { id: 6, period: '2020 - 2022', institution: 'SMA Wachid Hasyim 3 Sedati', major: 'MIPA' },
  { id: 7, period: '2022 - 2023', institution: 'SMA Maarif Yogyakarta', major: 'IPS' }
];

export const skills = [
  { name: 'Vue.js', level: 'Menengah' },
  { name: 'JavaScript', level: 'Menengah' },
  { name: 'Tailwind CSS', level: 'Menengah' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'Git & GitHub', level: 'Menengah' }
];

export const projects = [
  {
    title: 'Website Toko Online',
    image: 'https://via.placeholder.com/500x300?text=Proyek+1',
    description: 'Platform E-Commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#'
  },
  {
    title: 'Aplikasi Manajemen Tugas',
    image: 'https://via.placeholder.com/500x300?text=Proyek+2',
    description: 'Aplikasi untuk melacak progres tugas harian.',
    tech: ['React', 'Firebase'],
    link: '#'
  }
];
