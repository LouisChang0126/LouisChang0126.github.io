import type { MinistryItem } from '@/types';

export const ministries: MinistryItem[] = [
  {
    id: 'bol',
    name: { en: 'Taipei Bread of Life - North', zh: '台北靈糧堂 - 北區會堂' },
    image: '/ministry/bol.jpg',
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
    image: '/ministry/revive.jpg',
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
    image: '/ministry/koinonia.jpg',
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
];
