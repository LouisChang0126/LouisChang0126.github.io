import type { Publication } from '@/types';

export const publications: Publication[] = [
  {
    id: 'yearguessr',
    image: '/publications/yearguessr.png',
    title: {
      en: 'Beyond Memorization: A Multi-Modal Ordinal Regression Benchmark to Expose Popularity Bias in Vision-Language Models',
      zh: 'Beyond Memorization：以多模態序數回歸基準揭露視覺語言模型的熱門度偏誤',
    },
    authors: 'Li-Zhong Szu-Tu*, Ting-Lin Wu*, Chia-Jui Chang, He Syu, Yu-Lun Liu',
    authorsHighlighted: 'Chia-Jui Chang',
    venue: {
      en: 'Earlier version accepted as Oral at ICCVW’25 DataCV. Extended version — NeurIPS DB Track (scores 4/5/5/5, narrow miss).',
      zh: '早期版本為 ICCVW’25 DataCV 口頭論文；擴充版投稿 NeurIPS DB Track（審分 4/5/5/5，可惜未上）。',
    },
    tldr: {
      en: 'YearGuessr introduces a global, multi-century dataset of building ages. We propose YearCLIP and benchmark 30+ VLMs, highlighting the popularity bias of VLMs in ordinal regression.',
      zh: 'YearGuessr 建構全球跨世紀的建築年份資料集；我們提出 YearCLIP 並基準 30+ 個視覺語言模型，揭露其於序數回歸任務中的熱門度偏誤。',
    },
    links: [
      { label: 'Paper', url: 'https://arxiv.org/abs/2512.21337', icon: 'paper' },
      { label: 'Code', url: 'https://github.com/Sytwu/Year-Guessr', icon: 'github' },
      { label: 'Dataset', url: 'https://huggingface.co/datasets/Morris0401/Year-Guessr-Dataset', icon: 'hf' },
      { label: 'Project Page', url: 'https://sytwu.github.io/BeyondMemo/', icon: 'page' },
    ],
  },
];
