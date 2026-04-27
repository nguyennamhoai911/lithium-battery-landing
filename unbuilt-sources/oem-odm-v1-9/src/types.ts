import { LucideIcon } from 'lucide-react';

export interface DiagnosticProblem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AnalysisAxis {
  label: string;
  value: number;
}

export interface SolutionLayer {
  title: string;
  description: string;
  details: string[];
}

export interface RiskItem {
  risk: string;
  solution: string;
}

export interface PartnerScenario {
  title: string;
  insight: string;
  suggestion: string;
  image: string;
}
