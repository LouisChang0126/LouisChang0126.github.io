import type { Localized } from '@/types';

export const ui: Record<string, Localized> = {
  navHome: { en: 'Home', zh: '首頁' },
  navMinistry: { en: 'Ministry & Fellowship', zh: '服事&團契' },
  navPublications: { en: 'Publications', zh: '論文' },
  navProjects: { en: 'Projects', zh: '專案' },
  navExperience: { en: 'Experience', zh: '經歷' },
  navAwards: { en: 'Awards', zh: '競賽' },
  navEducation: { en: 'Education', zh: '學歷' },
  navSkills: { en: 'Skills', zh: '技能' },
  navExtra: { en: 'Clubs', zh: '社團' },

  downloadCV: { en: 'CV', zh: '履歷' },
  email: { en: 'Email', zh: '信箱' },
  mobile: { en: 'Mobile', zh: '手機' },
  github: { en: 'GitHub', zh: 'GitHub' },

  themeLight: { en: 'Switch to light mode', zh: '切換至淺色' },
  themeDark: { en: 'Switch to dark mode', zh: '切換至深色' },
  langEn: { en: '中', zh: '中' },
  langZh: { en: 'EN', zh: 'EN' },

  viewMore: { en: 'Show more', zh: '顯示更多' },
  viewLess: { en: 'Show less', zh: '收起' },
  selectedCoursework: { en: 'Selected Coursework', zh: '修習課程' },
  gradTag: { en: '(Grad)', zh: '（研究所）' },

  featuredProjects: { en: 'Selected Projects', zh: '精選專案' },
  allProjects: { en: 'All Projects', zh: '全部專案' },

  footerBuilt: {
    en: 'Built with Vue + TypeScript. Last updated Apr. 2026.',
    zh: '以 Vue + TypeScript 打造。最後更新：2026 年 4 月。',
  },
};
