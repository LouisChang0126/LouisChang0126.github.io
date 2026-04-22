import type { ExperienceItem } from '@/types';

export const experience: ExperienceItem[] = [
  {
    id: 'garmin',
    organization: 'Garmin',
    organizationUrl: 'https://www.garmin.com.tw/',
    role: {
      en: 'AOEM R&D Internship',
      zh: 'AOEM 研發實習',
    },
    date: 'Jul. 2025 – Feb. 2026',
    bullets: [
      {
        en: 'Road-Hazard Segmentation (in-vehicle driver safety): automated the annotation pipeline with SAM3, synthesized hazardous-scenario training samples via diffusion models, and accelerated the training workflow by 135%.',
        zh: '車用駕駛安全分割：以 SAM3 自動化標註、利用擴散模型合成危險情境樣本，整體訓練流程加速 135%。',
      },
      {
        en: 'SE-Asia Road Object Detection: fine-tuned YOLOX via semi-supervised learning to transfer a Taiwan-trained model to unlabeled regional imagery; additionally trained D-FINE and applied model quantization to optimize accuracy and latency for edge-AI deployment.',
        zh: '東南亞道路物件偵測：以半監督學習微調 YOLOX 進行跨區遷移；另訓練 D-FINE 並套用模型量化，兼顧邊緣端精度與延遲。',
      },
    ],
  },
  {
    id: 'uancare',
    organization: 'Uancare',
    organizationUrl: 'https://www.uancare.com/',
    role: {
      en: 'Spring Semester Internship',
      zh: '春季實習',
    },
    date: 'Feb. 2025 – Jun. 2025',
    bullets: [
      {
        en: 'Oral Movement Detection: built an in-app model for seniors to monitor oral muscle health; processed 10+ hours of video into labeled datasets and trained YOLO variants, achieving >0.85 recall across all classes.',
        zh: '口腔動作偵測：打造 app 內模型，協助長者監測口腔肌肉健康；處理 10+ 小時影片並訓練多種 YOLO 模型，各類別 recall 皆 >0.85。',
      },
      {
        en: 'Diadochokinetic (DDK) Audio Analysis: reproduced academic CNN-based DDK methods and trained a custom model comparable to traditional approaches.',
        zh: 'DDK 語音分析：重現學界 CNN-based DDK 方法，並訓練出與傳統做法表現相當的客製化模型。',
      },
    ],
  },
  {
    id: 'hcis',
    organization: 'HCIS Lab (NYCU)',
    role: {
      en: 'Undergraduate Researcher → Master Student',
      zh: '大學部研究生 → 碩士生',
    },
    date: 'Jun. 2024 – Present',
    bullets: [
      {
        en: 'Led 7-member team researching physical AI on a mobile manipulator in Fall 2024.',
        zh: '2024年秋季帶領 7 人團隊，於移動式機械手臂上研究 physical AI。',
      },
      {
        en: 'Spring 2025 participation in autonomous multi-drone systems: synchronized pick-and-place across 4 UAVs with ROS2 + PX4 + Gazebo.',
        zh: '2025年春季參與多無人機自主系統：以 ROS2 + PX4 + Gazebo 實現 4 UAV 同步 pick & place。',
      },
      {
        en: 'Built a real-to-sim robot arm pipeline (UMI → RoboCasa → Diffusion Policy); adopted as FunAI 2025 curriculum.',
        zh: '建置 real-to-sim 機械手臂流程（UMI → RoboCasa → Diffusion Policy），被採用為 FunAI 2025 教材。',
      },
      {
        en: 'Customized Stretch3 and a handheld gripper with multi-modality, inspired by CLAMP and Robot Utility Models.',
        zh: '自製 Stretch3 與手持多模態夾爪，靈感來自 CLAMP 與 Robot Utility Models。',
      },
    ],
  },
  {
    id: 'ta',
    organization: 'Intro. to AI — NYCU',
    role: {
      en: 'Teaching Assistant',
      zh: '課程助教',
    },
    date: 'Jan. 2025 – Jun. 2025',
    bullets: [
      {
        en: 'Designed a supervised-learning programming lab comparing CNN vs. decision-tree classifiers for 100+ undergraduates in Prof. Yi-Ting Chen & Prof. Yu-Chun Yen’s class.',
        zh: '在陳奕廷、顏羽君兩位教授的人工智慧概論擔任助教，為100+位大學生設計監督式學習程式作業，比較 CNN 與決策樹。',
      },
    ],
  },
];
