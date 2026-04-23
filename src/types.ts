export type Locale = 'en' | 'zh';

export type Localized<T = string> = { en: T; zh: T };

export interface LinkItem {
  label: string;
  url: string;
  icon?: 'paper' | 'github' | 'hf' | 'page' | 'link' | 'demo';
}

export interface Project {
  id: string;
  image: string | string[];
  date: string;
  title: Localized;
  summary: Localized;
  bullets: Localized[];
  tags: string[];
  links?: LinkItem[];
  featured?: boolean;
}

export interface Publication {
  id: string;
  image: string | string[];
  title: Localized;
  authors: string;
  authorsHighlighted?: string;
  venue: Localized;
  links: LinkItem[];
  tldr: Localized;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  organizationUrl?: string;
  role: Localized;
  date: string;
  bullets: Localized[];
}

export interface AwardItem {
  id: string;
  title: Localized;
  date: string;
  url?: string;
}

export interface EducationItem {
  id: string;
  school: Localized;
  degree: Localized;
  date: string;
  gpa?: string;
}

export interface SkillGroup {
  category: Localized;
  items: string[];
}

export interface MinistryItem {
  id: string;
  name: Localized;
  image: string | string[];
  bullets: Localized[];
  url?: string;
}

export interface ClubItem {
  id: string;
  name: Localized;
  role: Localized;
  date: string;
  description: Localized;
  media?: string | string[];
}
