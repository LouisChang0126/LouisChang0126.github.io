import type { MinistryItem } from '@/types';

export const ministries: MinistryItem[] = [
  {
    id: 'bol',
    name: { en: 'Taipei Bread of Life - North', zh: '台北靈糧堂 - 北區會堂' },
    date: '2014 – Present',
    image: [
      '/ministry/bol.jpg',
      '/ministry/bol-2.jpg',
      '/ministry/bol-3.jpg',
    ],
    bullets: [
      {
        en: 'Youth Worship: sound, backstage management, and service system administration.',
        zh: '青年崇拜：音控、後台總監、服事系統管理員',
      },
      {
        en: 'Children Worship: speaker and cell leader.',
        zh: '兒童崇拜：講員、兒童輔導',
      },
    ],
  },
  {
    id: 'revive',
    name: { en: 'Revive NYCU', zh: '陽明交大 - 復興禱告會' },
    date: '2024 – Present',
    image: [
      '/ministry/revive.jpg',
      '/ministry/revive-2.jpg',
      '/ministry/revive-3.jpg',
    ],
    bullets: [
      {
        en: 'Founder',
        zh: '創辦人',
      },
      {
        en: 'Prayer Leader',
        zh: '禱告主領',
      },
      {
        en: 'Worship Leader',
        zh: '敬拜主領',
      },
    ],
  },
  {
    id: 'koinonia',
    name: { en: 'Koinonia NYCU', zh: '陽明交大 - 柏克萊團契' },
    date: '2023 – Present',
    image: [
      '/ministry/koinonia.jpg',
      '/ministry/koinonia-2.jpg',
      '/ministry/koinonia-3.jpg',
    ],
    bullets: [
      {
        en: 'President',
        zh: '社長',
      },
      {
        en: 'the root Cell Group',
        zh: 'the root小組',
      },
    ],
  },
  {
    id: 'ccc',
    name: { en: 'NYCU CCC', zh: '陽明交大 - 學園團契' },
    image: [
      '/ministry/ccc.jpg',
      '/ministry/ccc-2.jpg',
      '/ministry/ccc-3.jpg',
    ],
    bullets: [
      {
        en: 'just a little member🤫',
        zh: '窩只是個小社員🤫',
      },
    ],
  },
];
