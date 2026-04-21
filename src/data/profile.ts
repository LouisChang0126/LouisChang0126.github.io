import type { Localized } from '@/types';

export const profile = {
  photo: '/profile.jpg',
  name: { en: 'Louis (Chia-Jui) Chang', zh: '張家睿 Louis Chang' } as Localized,
  identities: [
    { en: 'A passionate Christian', zh: '火熱的基督徒' },
    { en: 'A computer vision researcher', zh: '電腦視覺研究者' },
    { en: 'A robotics engineer', zh: '機器人工程師' },
    { en: 'An LLM Agent explorer', zh: 'LLM Agent 探索者' },
    { en: 'A free-spirited creator', zh: '自由創作的創客' },
    { en: 'A crazy Nazirite', zh: '瘋子拿細耳人' },
    { en: 'A rational and efficient leader', zh: '理性有效率的領導者' },
    { en: '🪵🪵🪵', zh: '🪵🪵🪵' },
    { en: 'A full-stack developer', zh: '全端技術實踐者' },
  ] as Localized[],
  email: 'qulip.louis.0126@gmail.com',
  mobile: '+886-906024704',
  github: 'LouisChang0126',
  githubUrl: 'https://github.com/LouisChang0126',
  resume: '/Resume.pdf',
};
