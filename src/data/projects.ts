import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 'garmin-hazard',
    image: ['/projects/garmin-hazard.jpg', '/projects/garmin-hazard-2.mp4'],
    date: 'Jul. 2025 – Feb. 2026',
    title: {
      en: 'Road-Hazard Segmentation — Garmin AOEM',
      zh: '車道危險物分割 — Garmin AOEM',
    },
    summary: {
      en: 'In-vehicle driver safety segmentation with SAM3 auto-annotation and diffusion-based data synthesis.',
      zh: '車用駕駛安全分割模型：以 SAM3 自動化標註並用擴散模型合成難樣本。',
    },
    bullets: [
      {
        en: 'Automated the annotation pipeline with SAM3, cutting manual labeling cost.',
        zh: '使用 SAM3 自動化標註流程，大幅降低人工標注成本。',
      },
      {
        en: 'Synthesized hazardous-scenario training samples via diffusion models to cover rare cases.',
        zh: '以擴散模型合成罕見危險情境的訓練樣本，補足長尾資料。',
      },
      {
        en: 'Accelerated the overall training workflow by 135%.',
        zh: '整體訓練流程加速 135%。',
      },
    ],
    tags: ['SAM3', 'Diffusion', 'Segmentation', 'Edge AI'],
    links: [{ label: 'Garmin', url: 'https://www.garmin.com.tw/', icon: 'link' }],
    featured: true,
  },
  {
    id: 'safmc',
    image: '/projects/safmc.jpg',
    date: 'Mar. 2025',
    title: {
      en: 'Multi-Drones Autonomous Pick & Place — SAFMC 2025 (4th Place, D2)',
      zh: '多無人機自動抓取系統 — SAFMC 2025（D2 組第四名）',
    },
    summary: {
      en: '18-member team enabling 4 drones to perform synchronized pick-and-place autonomously.',
      zh: '18 人團隊，讓 4 台無人機能自主、同步完成抓取與放置任務。',
    },
    bullets: [
      {
        en: 'Implemented the final state machine, integrated Gazebo simulation, and developed the ROS2 mediator module; tuned PX4 parameters.',
        zh: '負責 final state machine、整合 Gazebo 模擬，開發 ROS2 mediator 模組並調整 PX4 參數。',
      },
      {
        en: 'Designed 3D-printed components and performed SMT soldering for the drone hardware.',
        zh: '設計 3D 列印零件並進行 SMT 焊接。',
      },
      {
        en: 'Open-sourced at HCIS Lab; won High Distinction at NYCU CS Project Competition.',
        zh: '於 HCIS Lab 開源；獲陽明交大資工專題競賽高級榮譽獎。',
      },
    ],
    tags: ['ROS2', 'PX4', 'Gazebo', 'Drones', 'State Machine'],
    links: [
      { label: 'Application', url: 'https://github.com/HCIS-Lab/safmc-d2-application', icon: 'github' },
      { label: 'Description', url: 'https://github.com/HCIS-Lab/safmc-d2-description', icon: 'github' },
      { label: 'SAFMC', url: 'https://www.safmc.com.sg/', icon: 'link' },
    ],
    featured: true,
  },
  {
    id: 'umi',
    image: [
      '/projects/umi.png',
      '/projects/umi-2.png',
      '/projects/umi-3.png',
      '/projects/umi-4.png',
    ],
    date: 'Fall 2024 – Present',
    title: {
      en: 'Real-to-Sim Manipulation Pipeline — HCIS Lab',
      zh: '真實到模擬的機械手臂訓練流程 — HCIS Lab',
    },
    summary: {
      en: 'Real-world demos via UMI gripper → RoboCasa sim → Diffusion Policy training.',
      zh: '透過 UMI 夾爪收集真實示範 → RoboCasa 模擬器 → 以 Diffusion Policy 訓練操作策略。',
    },
    bullets: [
      {
        en: 'Built a real-to-sim robot arm pipeline with Universal Manipulation Interface, RoboCasa, and Diffusion Policy.',
        zh: '整合 Universal Manipulation Interface、RoboCasa 與 Diffusion Policy 構建 real-to-sim 流程。',
      },
      {
        en: 'Pipeline adopted as the curriculum of FunAI 2025 (NTHU outreach program).',
        zh: '此流程被採用為 FunAI 2025（清大推廣課程）的教材。',
      },
    ],
    tags: ['Diffusion Policy', 'RoboCasa', 'UMI', 'Physical AI'],
    links: [
      { label: 'UMI', url: 'https://umi-gripper.github.io/', icon: 'link' },
      { label: 'RoboCasa', url: 'https://robocasa.ai/', icon: 'link' },
      { label: 'FunAI 2025', url: 'https://mislab.cs.nthu.edu.tw/explorecsr-4/', icon: 'link' },
    ],
    featured: true,
  },
  {
    id: 'stretch3-gripper',
    image: '/projects/stretch3-gripper.mp4',
    date: 'Fall 2024 – Present',
    title: {
      en: 'Stretch3 & Handheld Multi-Modal Gripper — HCIS Lab',
      zh: 'Stretch3 與手持多模態夾爪 — HCIS Lab',
    },
    summary: {
      en: 'Custom gripper for the Stretch3 mobile manipulator plus a handheld variant with multi-modality sensing.',
      zh: '為 Stretch3 移動式機械手臂客製化夾爪，並延伸出具備多模態感測的手持版。',
    },
    bullets: [
      {
        en: 'Customized the Stretch3 gripper with multi-modality capabilities for demonstration collection on the mobile manipulator.',
        zh: '為 Stretch3 客製化多模態夾爪，用於移動式機械手臂上的示範資料收集。',
      },
      {
        en: 'Built a handheld variant to extend data collection beyond the robot — inspired by CLAMP and Robot Utility Models.',
        zh: '另外製作手持版本延伸資料收集範圍，設計靈感來自 CLAMP 與 Robot Utility Models。',
      },
    ],
    tags: ['Stretch3', 'Gripper', 'Multi-Modality', 'Mobile Manipulation'],
    featured: true,
  },
  {
    id: 'church-bot',
    image: '/projects/church-bot.png',
    date: 'Jul. 2023 – Present',
    title: {
      en: 'Church Service Scheduling LINE Bot',
      zh: '教會服事排班 LINE Bot',
    },
    summary: {
      en: 'End-to-end scheduling serving 30+ members in production for 2+ years; LLM agent auto-assigns shifts.',
      zh: '端到端排班系統，30+ 位同工正式使用滿兩年；LLM agent 自動排班。',
    },
    bullets: [
      {
        en: 'Built LINE Bot for shift swap & reminders + web dashboard; backed by GCP Cloud Functions and Firestore.',
        zh: 'LINE Bot 負責換班、提醒；Web 儀表板負責瀏覽與編輯；後端使用 GCP Cloud Functions 與 Firestore。',
      },
      {
        en: 'LLM agent auto-generates and modifies assignments from CSV under custom rules — reduced manual scheduling time by 85%.',
        zh: 'LLM agent 依規則（避免連排、每週上限）自動從 CSV 生成並調整排班，手動作業減少 85%。',
      },
    ],
    tags: ['LINE Bot', 'GCP', 'Firestore', 'LLM Agent'],
    links: [{ label: 'GitHub', url: 'https://github.com/LouisChang0126/BOL-Line-Bot-3.0', icon: 'github' }],
    featured: true,
  },
  {
    id: 'make-ntu',
    image: [
      '/projects/make-ntu.jpg',
      '/projects/make-ntu-2.jpg',
      '/projects/make-ntu-3.png',
      '/projects/make-ntu-4.jpg',
    ],
    date: 'May 2025',
    title: {
      en: 'Intelligent Parking System — Make NTU × AUO (3rd Place)',
      zh: '智慧停車系統 — Make NTU × AUO（第三名）',
    },
    summary: {
      en: 'Voice-driven parking that maximizes storage density with a lift-and-transport robot car.',
      zh: '語音驅動的停車系統，以升降搬運機器車最大化車位密度。',
    },
    bullets: [
      {
        en: 'Developed an intelligent parking system combining STT, LLM, and TTS on the server side with an automated lift-and-transport robot car.',
        zh: '伺服端結合 STT、LLM、TTS，搭配自動升降搬運機器車。',
      },
      {
        en: 'Responsible for conceptualization, team leadership, mechanical design, and vehicle movement programming.',
        zh: '負責構想、團隊領導、機構設計與車體運動程式。',
      },
    ],
    tags: ['Robot Car', 'LLM', 'STT/TTS', 'Mechanical Design'],
    featured: true,
  },
  {
    id: 'garmin-detection',
    image: '/projects/garmin-detection.jpg',
    date: 'Jul. 2025 – Feb. 2026',
    title: {
      en: 'SE-Asia Road Object Detection — Garmin AOEM',
      zh: '東南亞道路物件偵測 — Garmin AOEM',
    },
    summary: {
      en: 'Cross-region transfer of a Taiwan-trained detector to unlabeled SE-Asia imagery.',
      zh: '將台灣資料訓練的偵測模型跨區遷移至無標註的東南亞影像。',
    },
    bullets: [
      {
        en: 'Fine-tuned YOLOX with semi-supervised learning to transfer across regions.',
        zh: '以半監督學習微調 YOLOX，完成跨區域遷移。',
      },
      {
        en: 'Trained D-FINE and applied model quantization to optimize accuracy and latency for edge deployment.',
        zh: '訓練 D-FINE 並套用模型量化，針對邊緣端部署兼顧精度與延遲。',
      },
    ],
    tags: ['YOLOX', 'D-FINE', 'Semi-Supervised', 'Quantization'],
    links: [{ label: 'Garmin', url: 'https://www.garmin.com.tw/', icon: 'link' }],
    featured: false,
  },
  {
    id: 'meichu',
    image: [
      '/projects/meichu.jpg',
      '/projects/meichu-2.jpg',
      '/projects/meichu-3.jpg',
      '/projects/meichu-4.jpg',
    ],
    date: 'Aug. 2024',
    title: {
      en: 'GeoGuessr-in-NYCU — Meichu Hackathon (LINE Taiwan, 3rd Place)',
      zh: 'GeoGuessr in NYCU — 梅竹黑客松（LINE台灣組 第三名）',
    },
    summary: {
      en: 'A LINE Bot that replaces indoor GPS with a building classifier for campus navigation.',
      zh: 'LINE Bot 以建築物分類取代室內 GPS，協助校內導航。',
    },
    bullets: [
      {
        en: 'Led a 5-member team in a 24-hour competition; proposed building-classification to resolve indoor GPS inaccuracy.',
        zh: '在 24 小時賽中帶領 5 人隊伍，提出以建築分類解決室內 GPS 不準的問題。',
      },
      {
        en: 'Built a LINE Bot frontend and integrated Gemini + GCP backend to identify nearby buildings from user photos.',
        zh: '打造 LINE Bot 前端，後端整合 Gemini 與 GCP，從使用者照片辨識附近建築。',
      },
    ],
    tags: ['LINE Bot', 'Gemini', 'GCP', 'Image Classification'],
    links: [
      { label: 'GitHub', url: 'https://github.com/LouisChang0126/geoguessr_in_nycu', icon: 'github' },
      { label: 'Meichu', url: 'https://2024.meichuhackathon.org/', icon: 'link' },
    ],
    featured: false,
  },
  {
    id: 'macro-kbd',
    image: '/projects/macro-kbd.jpg',
    date: 'Apr. 2023',
    title: {
      en: 'Arduino Macro Keyboard',
      zh: 'Arduino 巨集鍵盤',
    },
    summary: {
      en: 'Customizable macro keyboard on Arduino Pro Micro; taught to 61 students across two club courses.',
      zh: '基於 Arduino Pro Micro 的可自訂巨集鍵盤；於社課中教導過 61 位同學完成作品。',
    },
    bullets: [
      {
        en: 'Designed hardware + firmware; instructed as Teaching Officer of NYCU Makereal Club.',
        zh: '負責硬體與韌體設計；於陽明交大創客社擔任教學幹部。',
      },
    ],
    tags: ['Arduino', 'Firmware', 'HID'],
    featured: false,
  },
];
