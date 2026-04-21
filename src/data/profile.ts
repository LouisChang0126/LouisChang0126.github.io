import type { Localized } from '@/types';

export const profile = {
  photo: '/profile.jpg',
  name: { en: 'Louis (Chia-Jui) Chang', zh: '張家睿 Louis Chang' } as Localized,
  identities: [
    { en: 'A code-loving maker', zh: '愛寫程式的創客' },
    { en: 'A passionate Christian', zh: '火熱的基督徒' },
    { en: 'A computer vision researcher', zh: '電腦視覺研究者' },
    { en: 'A robotics engineer', zh: '機器人工程師' },
    { en: 'An LLM & Agent explorer', zh: 'LLM & Agent 探索者' },
    { en: 'A hackathon regular', zh: '黑客松常客' },
    { en: 'A drone enthusiast', zh: '無人機玩家' },
    { en: 'A lifelong learner', zh: '永遠在學習的人' },
  ] as Localized[],
  email: 'qulip.louis.0126@gmail.com',
  mobile: '+886-906024704',
  github: 'LouisChang0126',
  githubUrl: 'https://github.com/LouisChang0126',
  resume: '/Resume.pdf',
};
