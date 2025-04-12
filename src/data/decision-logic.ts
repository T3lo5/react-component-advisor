import { ChecklistAnswer, AnalysisResult } from '../types';

export const analyzeAnswers = (answers: ChecklistAnswer): AnalysisResult => {
    let reusabilityScore = 0;
    let complexityScore = 0;

    if (answers.multipleUse === 'yes') reusabilityScore += 3;
    if (answers.responsibilitySingle === 'yes') reusabilityScore += 2;
    if (answers.similar === 'no') reusabilityScore += 1;
    if (answers.isolated === 'yes') reusabilityScore += 2;
    if (answers.parameterizable === 'yes') reusabilityScore += 2;

    if (answers.over100Lines === 'yes') complexityScore += 2;
    if (answers.multipleFunction === 'yes') complexityScore += 2;
    if (answers.nestedJSX === 'yes') complexityScore += 1;
    if (answers.manyProps === 'yes') complexityScore += 1;
    if (answers.complexLogic === 'yes') complexityScore += 2;

    if (answers.stateManagement === 'no') complexityScore += 1;
    if (answers.effectsNeeded === 'no') complexityScore += 1;
    if (answers.hookDependencies === 'no') complexityScore += 1;
    if (answers.businessUILogic === 'no') complexityScore += 1;

    let recommendationType = '';
    let recommendationDetails = '';
    let nextSteps: string[] = [];

    if (reusabilityScore >= 7) {
        recommendationType = 'Componente Reutilizável';
        recommendationDetails = 'Este componente tem alto potencial de reutilização e deve ser implementado como um componente compartilhado.';
        nextSteps = [
            'Implementar na pasta src/components/ui/ ou src/components/shared/',
            'Criar testes unitários robustos',
            'Documentar todas as props com TypeScript',
            'Considerar criar uma variação na documentação de componentes da equipe'
        ];
    } else if (complexityScore >= 6) {
        recommendationType = 'Dividir em Subcomponentes';
        recommendationDetails = 'Este componente é complexo demais e deve ser dividido em componentes menores com responsabilidades mais específicas.';
        nextSteps = [
            'Identificar responsabilidades distintas',
            'Extrair em componentes menores mais focados',
            'Considerar o uso de Context API para compartilhar estado',
            'Avaliar a extração de lógica para custom hooks'
        ];
    } else if (reusabilityScore >= 4 && complexityScore >= 3) {
        recommendationType = 'Componente Misto';
        recommendationDetails = 'Extraia a parte reutilizável para componentes compartilhados e mantenha a lógica específica no módulo.';
        nextSteps = [
            'Extrair a UI genérica para a pasta de componentes compartilhados',
            'Manter a lógica específica no componente de feature',
            'Usar composição para reutilizar o componente de UI'
        ];
    } else {
        recommendationType = 'Componente Específico';
        recommendationDetails = 'Este componente parece ser específico para uma feature e deve ser implementado na pasta do módulo correspondente.';
        nextSteps = [
            'Implementar dentro da pasta da feature específica',
            'Focar em manter a responsabilidade bem definida',
            'Evitar adicionar lógica não relacionada à feature'
        ];
    }

    return {
        reusabilityScore,
        complexityScore,
        recommendationType,
        recommendationDetails,
        nextSteps
    };
};