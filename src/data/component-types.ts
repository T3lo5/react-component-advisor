import { ComponentType } from '../types';

export const componentTypes: ComponentType[] = [
    {
        name: 'UI (Atômico)',
        description: 'Elementos visuais básicos reutilizáveis',
        examples: 'Button, Input, Card, Modal, Badge, Avatar',
        whenToUse: 'Para elementos visuais básicos que serão usados em muitos lugares',
        folder: '/src/components/ui/'
    },
    {
        name: 'Composto',
        description: 'Combinam vários componentes atômicos, podem usar Context',
        examples: 'Select (com Dropdown, Options), Tabs, Accordion',
        whenToUse: 'Para interfaces complexas com padrões de interação bem definidos',
        folder: '/src/components/compound/'
    },
    {
        name: 'Layout',
        description: 'Definem estrutura e posicionamento',
        examples: 'Grid, Container, Section, Flex',
        whenToUse: 'Para criar estruturas de layout consistentes',
        folder: '/src/components/layout/'
    },
    {
        name: 'Feature',
        description: 'Específicos para uma funcionalidade do sistema',
        examples: 'ProductCard, UserForm, OrderSummary',
        whenToUse: 'Para implementar funcionalidades específicas de um domínio',
        folder: '/src/features/[feature]/components/'
    },
    {
        name: 'Página',
        description: 'Representam uma rota/página completa',
        examples: 'HomePage, ProductDetailPage, CheckoutPage',
        whenToUse: 'Como ponto de entrada para cada rota da aplicação',
        folder: '/src/pages/'
    },
    {
        name: 'HOC',
        description: 'Adicionam funcionalidades a outros componentes',
        examples: 'withAuthentication, withTheme',
        whenToUse: 'Para adicionar comportamentos transversais',
        folder: '/src/hocs/'
    },
    {
        name: 'Renderização Condicional',
        description: 'Implementam lógica de renderização baseada em condições',
        examples: 'Authorized, ConditionalRender, FeatureFlag',
        whenToUse: 'Para encapsular lógica complexa de renderização condicional',
        folder: '/src/components/conditional/'
    },
    {
        name: 'Dados',
        description: 'Focados no carregamento e gerenciamento de dados',
        examples: 'UserProvider, DataTable, AsyncList',
        whenToUse: 'Para separar a lógica de acesso a dados da lógica de apresentação',
        folder: '/src/components/data/'
    }
];