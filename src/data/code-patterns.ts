import { CodePattern } from '../types';

export const codePatterns: CodePattern[] = [
    {
        id: 'composition',
        name: 'Composição vs. Props Drilling',
        problem: 'Passar muitas props através de vários níveis de componentes.',
        description: 'Use o padrão de composição com children ou slots nomeados para evitar prop drilling.',
        solution: 'Use o padrão de composição com `children` ou slots nomeados.',
        codeExample: `// ❌ Evitar: Props Drilling
<Card 
  title="Título"
  description="Descrição"
  buttonText="Clique aqui"
  onButtonClick={handleClick}
  imageUrl="/imagem.jpg"
  imageAlt="Descrição da imagem"
/>

// ✅ Preferir: Composição
<Card>
  <Card.Header>
    <Card.Title>Título</Card.Title>
  </Card.Header>
  <Card.Body>
    <Card.Description>Descrição</Card.Description>
    <Card.Image src="/imagem.jpg" alt="Descrição da imagem" />
  </Card.Body>
  <Card.Footer>
    <Button onClick={handleClick}>Clique aqui</Button>
  </Card.Footer>
</Card>`,
        characteristics: ['Flexível', 'Evita prop drilling', 'Melhor DX', 'Permite customização']
    },
    {
        id: 'logicUiSeparation',
        name: 'Separação de Lógica e UI',
        problem: 'Componentes que misturam lógica complexa com renderização.',
        description: 'Separe a lógica da UI através de custom hooks.',
        solution: 'Use Custom Hooks para extrair lógica e mantenha componentes focados na UI.',
        codeExample: `// ❌ Evitar: Mistura de lógica e UI
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchUser(userId)
      .then(data => setUser(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// ✅ Preferir: Separação de lógica em custom hooks
function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchUser(userId)
      .then(data => setUser(data))
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [userId]);

  return { user, loading, error };
}

function UserProfile({ userId }) {
  const { user, loading, error } = useUser(userId);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;
  
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}`,
        characteristics: ['Melhor testabilidade', 'Reutilização de lógica', 'Separação de responsabilidades', 'Código mais limpo']
    },
    {
        id: 'contractTypes',
        name: 'Tipagem Avançada para Props',
        problem: 'Props complexas com muitas opções condicionais.',
        description: 'Use tipos discriminados para melhorar a segurança de tipos.',
        solution: 'Use tipagem discriminada com union types.',
        codeExample: `// ❌ Evitar: Props confusas com muitas opções condicionais
type ButtonProps = {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  disabled?: boolean;
  isLoading?: boolean;
};

// ✅ Preferir: Props discriminadas por tipo
type BaseButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
};

type ActionButtonProps = BaseButtonProps & {
  variant: 'action';
  onClick: () => void;
  label: string;
  isLoading?: boolean;
};

type LinkButtonProps = BaseButtonProps & {
  variant: 'link';
  href: string;
  label?: string;
  icon?: React.ReactNode;
};

type IconButtonProps = BaseButtonProps & {
  variant: 'icon';
  icon: React.ReactNode;
  ariaLabel: string;
  onClick: () => void;
};

type ButtonProps = ActionButtonProps | LinkButtonProps | IconButtonProps;

// O componente agora pode usar type narrowing
function Button(props: ButtonProps) {
  if (props.variant === 'link') {
    return <a href={props.href}>{props.label || props.icon}</a>;
  }
  
  if (props.variant === 'icon') {
    return (
      <button onClick={props.onClick} aria-label={props.ariaLabel}>
        {props.icon}
      </button>
    );
  }
  
  // Deve ser 'action'
  return (
    <button onClick={props.onClick} disabled={props.disabled || props.isLoading}>
      {props.isLoading ? <Spinner /> : props.label}
    </button>
  );
}`,
        characteristics: ['Type safety', 'Melhor autocompletion', 'Código mais previsível', 'Evita props inválidas']
    },
    {
        id: 'containerPresentational',
        name: 'Container/Presentational',
        problem: 'Componentes que precisam carregar dados antes de renderizar.',
        description: 'Separe componentes que buscam dados dos que apenas os exibem.',
        solution: 'Use o padrão Container/Presentational com React Suspense.',
        codeExample: `// Componente apresentacional (puro)
function UserList({ users }) {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

// Componente container (carrega dados)
function UserListContainer() {
  const users = useUsers(); // Hook que carrega dados

  return <UserList users={users} />;
}

// Uso com Suspense para melhor UX
function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <UserListContainer />
    </Suspense>
  );
}`,
        characteristics: ['Separação de preocupações', 'Melhor testabilidade', 'Componentes mais focados', 'Melhor UX com Suspense']
    }
];

