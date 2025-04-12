import { QuestionCategory } from '../types';

export const categoryTranslations: Record<QuestionCategory, string> = {
    'reusability': 'Reutilização',
    'complexity': 'Complexidade',
    'state': 'Estado',
    'types': 'Tipagem',
    'performance': 'Performance',
    'maintenance': 'Manutenção'
};

export function translateCategory(category: QuestionCategory): string {
    return categoryTranslations[category] || category;
}