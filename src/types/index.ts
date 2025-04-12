export type TabType = 'checklist' | 'patterns' | 'types' | 'tree';

export type QuestionCategory = 'reusability' | 'complexity' | 'state' | 'types' | 'performance' | 'maintenance';

export interface ChecklistQuestion {
    id: string;
    text: string;
    tip?: string;
    category: QuestionCategory;
}

export type ChecklistAnswer = Record<string, 'yes' | 'no' | 'maybe' | undefined>;

export interface AnalysisResult {
    reusabilityScore: number;
    complexityScore: number;
    recommendationType: string;
    recommendationDetails: string;
    nextSteps: string[];
}

export interface ComponentType {
    name: string;
    description: string;
    examples: string;
    whenToUse: string;
    folder: string;
}

export interface CodePattern {
    id: string;
    name: string;
    description: string;
    problem: string;
    solution: string;
    codeExample: string;
    characteristics: string[];
}