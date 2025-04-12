import { ChecklistQuestion } from '../types';

export const checklistQuestions: ChecklistQuestion[] = [
    // Reusabilidade
    {
        id: 'multipleUse',
        text: 'Esta funcionalidade será utilizada em mais de um lugar na aplicação?',
        tip: 'Considere se o componente poderá ser utilizado em diferentes telas ou contextos',
        category: 'reusability'
    },
    {
        id: 'responsibilitySingle',
        text: 'A implementação possui uma responsabilidade única e bem definida?',
        tip: 'Um componente deve fazer uma coisa e fazê-la bem',
        category: 'reusability'
    },
    {
        id: 'similar',
        text: 'Existe algum componente similar na base de código que pode ser adaptado?',
        tip: 'Verifique se há componentes que podem ser estendidos em vez de criar um novo',
        category: 'reusability'
    },
    {
        id: 'isolated',
        text: 'O componente consegue funcionar de forma isolada, sem dependências específicas de contexto?',
        tip: 'Componentes isolados são mais fáceis de testar e reutilizar',
        category: 'reusability'
    },
    {
        id: 'parameterizable',
        text: 'É possível parametrizar o componente com props para diferentes usos?',
        tip: 'Bons componentes reutilizáveis aceitam props para personalização',
        category: 'reusability'
    },

    // Complexidade
    {
        id: 'over100Lines',
        text: 'A implementação tem mais de 100 linhas?',
        tip: 'Componentes grandes são mais difíceis de manter e entender',
        category: 'complexity'
    },
    {
        id: 'multipleFunction',
        text: 'O componente realiza mais de uma função lógica?',
        tip: 'Múltiplas responsabilidades podem indicar necessidade de divisão',
        category: 'complexity'
    },
    {
        id: 'nestedJSX',
        text: 'Existem mais de 3 níveis de aninhamento JSX?',
        tip: 'JSX muito aninhado dificulta a leitura e manutenção',
        category: 'complexity'
    },
    {
        id: 'manyProps',
        text: 'O componente recebe mais de 7 props?',
        tip: 'Muitas props podem indicar responsabilidades excessivas',
        category: 'complexity'
    },
    {
        id: 'complexLogic',
        text: 'Há lógica complexa que poderia ser movida para hooks personalizados?',
        tip: 'Extrair lógica para hooks melhora a legibilidade e testabilidade',
        category: 'complexity'
    },

    // Estado e Efeitos
    {
        id: 'stateManagement',
        text: 'O gerenciamento de estado está no nível correto da aplicação?',
        tip: 'Estado deve ser mantido no nível mais alto necessário, mas não mais alto',
        category: 'state'
    },
    {
        id: 'effectsNeeded',
        text: 'Estou usando useEffect apenas quando necessário?',
        tip: 'useEffect deve ser usado apenas para sincronizar com sistemas externos',
        category: 'state'
    },
    {
        id: 'hookDependencies',
        text: 'As dependências dos hooks estão corretamente declaradas?',
        tip: 'Dependências faltantes ou excessivas podem causar bugs',
        category: 'state'
    },
    {
        id: 'businessUILogic',
        text: 'A lógica de negócio está separada da lógica de UI?',
        tip: 'Separar lógica de negócio da UI melhora testabilidade e manutenção',
        category: 'state'
    },

    // Tipagem
    {
        id: 'propTyped',
        text: 'Todas as props e estados estão corretamente tipados?',
        tip: 'Tipagem forte previne erros em tempo de desenvolvimento',
        category: 'types'
    },
    {
        id: 'avoidAny',
        text: 'Estou evitando o uso de any e unknown sem tipagens explícitas?',
        tip: 'O uso de any elimina os benefícios do TypeScript',
        category: 'types'
    },

    // Performance
    {
        id: 'largeList',
        text: 'O componente renderiza listas grandes?',
        tip: 'Listas grandes podem precisar de virtualização para melhor performance',
        category: 'performance'
    },
    {
        id: 'memoization',
        text: 'Estou usando React.memo, useCallback ou useMemo onde apropriado?',
        tip: 'Memoização evita cálculos e renderizações desnecessárias',
        category: 'performance'
    },

    // Manutenibilidade
    {
        id: 'naming',
        text: 'O nome do componente reflete claramente sua função?',
        tip: 'Nomes claros são essenciais para manutenibilidade futura',
        category: 'maintenance'
    },
    {
        id: 'testable',
        text: 'Há testes unitários para a lógica principal?',
        tip: 'Testes são essenciais para garantir funcionamento a longo prazo',
        category: 'maintenance'
    }
];