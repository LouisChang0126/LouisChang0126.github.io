import type { EducationItem, Localized } from '@/types';

export const education: EducationItem[] = [
  {
    id: 'nycu-ms',
    school: { en: 'National Yang Ming Chiao Tung University', zh: '國立陽明交通大學' },
    degree: {
      en: 'M.S. in Data Science and Engineering, College of Computer Science',
      zh: '資訊學院 資料科學與工程研究所 碩士',
    },
    date: 'Sep. 2026 – Jun. 2028 (expected)',
  },
  {
    id: 'nycu-bs',
    school: { en: 'National Yang Ming Chiao Tung University', zh: '國立陽明交通大學' },
    degree: {
      en: 'B.S. in Computer Science',
      zh: '資訊工程學系 學士',
    },
    date: 'Sep. 2022 – Jun. 2026',
    gpa: '4.00/4.3 (overall)',
  },
];

export interface CourseGroup {
  category: Localized;
  courses: Localized[];
}

export const coursework: CourseGroup[] = [
  {
    category: { en: 'Robotics & Vision', zh: '機器人與視覺' },
    courses: [
      { en: 'Robotic Navigation and Exploration (Grad)', zh: '機器人導航與探索（研究所）' },
      { en: 'Selected Topics in Visual Recognition using DL (Grad)', zh: '深度視覺辨識專題（研究所）' },
      { en: 'AI Capstone', zh: 'AI 總整課程' },
      { en: 'Embedded Systems Capstone', zh: '嵌入式系統總整' },
    ],
  },
  {
    category: { en: 'AI & ML', zh: 'AI 與 機器學習' },
    courses: [
      { en: 'Artificial Intelligence (Grad)', zh: '人工智慧（研究所）' },
      { en: 'Machine Learning', zh: '機器學習' },
      { en: 'Natural Language Processing', zh: '自然語言處理' },
    ],
  },
  {
    category: { en: 'CS Foundations', zh: '資訊基礎' },
    courses: [
      { en: 'Data Structures & OOP', zh: '資料結構與物件導向程式' },
      { en: 'Algorithms', zh: '演算法' },
      { en: 'Operating Systems', zh: '作業系統' },
      { en: 'Computer Networks', zh: '計算機網路' },
    ],
  },
  {
    category: { en: 'Math', zh: '數學' },
    courses: [
      { en: 'Linear Algebra', zh: '線性代數' },
      { en: 'Probability', zh: '機率' },
      { en: 'Discrete Mathematics', zh: '離散數學' },
      { en: 'Applied Statistical Methods', zh: '應用統計方法' },
    ],
  },
  {
    category: { en: 'Security & Systems', zh: '資安與系統' },
    courses: [
      { en: 'Cryptography Engineering (Grad)', zh: '密碼工程（研究所）' },
      { en: 'Computer System Administration', zh: '系統管理' },
    ],
  },
];
