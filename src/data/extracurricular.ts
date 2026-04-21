import type { ClubItem } from '@/types';

export const clubs: ClubItem[] = [
  {
    id: 'koinonia',
    name: { en: 'NYCU Koinonia Club', zh: '交大團契' },
    role: { en: 'President', zh: '社長' },
    date: 'Sep. 2022 – Jun. 2026',
    description: {
      en: 'Organized recurring events including English Table, Club Day, Xmas Party, and Poetry Performance.',
      zh: '籌辦 English Table、社團博覽會、聖誕晚會、詩文展演等定期活動。',
    },
    media: ['/extracurricular/koinonia.jpg', '/extracurricular/koinonia-2.jpg'],
  },
  {
    id: 'makereal',
    name: { en: 'NYCU Makereal Club', zh: '交大創客社' },
    role: { en: 'Teaching Officer', zh: '教學幹部' },
    date: 'Sep. 2022 – Jan. 2024',
    description: {
      en: 'Developed hands-on maker projects (Micro Keyboard, Quadruped Robot, Light Cube) and instructed members in 3D modeling, laser cutting, 3D printing, and Arduino.',
      zh: '設計動手作專案（巨集鍵盤、四足機器人、光立方體），並教授 3D 建模、雷射切割、3D 列印與 Arduino。',
    },
  },
  {
    id: 'innovation',
    name: { en: 'NYCU Innovation and Entrepreneurship Club', zh: '交大創新創業社' },
    role: { en: 'Operating Officer', zh: '營運幹部' },
    date: 'Jul. 2023 – Jul. 2024',
    description: {
      en: 'Coordinated club operations and events; participated in a student-led startup attempt exploring a tech product.',
      zh: '統籌社團營運與活動，並參與一次學生發起的創業嘗試。',
    },
  },
];
