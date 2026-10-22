export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  sector: string;
  summary: string;
  bullets: string[];
  keyWins: string[];
  skillsApplied: string[];
  imagePath?: string;
  imageAlt?: string;
  badge?: string;
}

export interface MethodStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fieldTactics: string[];
  keyQuestionOrPitch: string;
  toolsUsed: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}
