import type { SkillGroup } from '@/types';

export const skills: SkillGroup[] = [
  {
    category: { en: 'Languages', zh: '程式語言' },
    items: ['Python', 'C/C++', 'JavaScript', 'TypeScript', 'HTML', 'PHP'],
  },
  {
    category: { en: 'ML / DL', zh: '機器 / 深度學習' },
    items: ['PyTorch', 'TensorFlow', 'ONNX', 'OpenCV', 'scikit-learn', 'Hugging Face', 'Whisper (STT)'],
  },
  {
    category: { en: 'Computer Vision', zh: '電腦視覺' },
    items: ['YOLO', 'D-FINE', 'SAM3', 'CLIP', 'Diffusion Models', 'Model Quantization', 'Semi-supervised Learning'],
  },
  {
    category: { en: 'Robotics', zh: '機器人' },
    items: ['ROS2', 'PX4', 'Gazebo', 'Universal Manipulation Interface', 'Stretch3'],
  },
  {
    category: { en: 'LLM / GenAI', zh: 'LLM 與生成式 AI' },
    items: ['Vibe Coding', 'Fine-tuning LLMs', 'Model Routing', 'LLM API Integration', 'MCP Design'],
  },
  {
    category: { en: 'Cloud / Backend', zh: '雲端 / 後端' },
    items: ['GCP Cloud Functions', 'Firestore', 'Cloud Scheduler', 'LINE Bot SDK'],
  },
  {
    category: { en: 'Tools', zh: '工具' },
    items: ['Git', 'Linux', 'Arduino', '3D Modeling', 'SMT Soldering'],
  },
];
