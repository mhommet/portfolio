export type Locale = 'en' | 'fr';

export interface EducationItem {
  title: string;
  institution: string;
  location: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: React.ReactNode;
}

export interface TranslatedContent {
  en: Record<string, string | string[] | number>;
  fr: Record<string, string | string[] | number>;
} 