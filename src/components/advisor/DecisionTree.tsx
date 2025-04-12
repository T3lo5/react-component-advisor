import React from "react";

const DecisionTree: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Árvore de Decisão</h2>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-600 mb-6">
          Esta árvore de decisão ajuda a visualizar o processo de escolha do
          tipo de componente mais adequado para sua implementação.
        </p>

        <div className="overflow-auto">
          <svg
            width="800"
            height="500"
            viewBox="0 0 800 500"
            className="mx-auto"
          >
            <rect
              x="350"
              y="20"
              width="100"
              height="40"
              rx="5"
              fill="#dbeafe"
              stroke="#3b82f6"
            />
            <text x="400" y="45" textAnchor="middle" fontSize="12">
              Nova Implementação
            </text>

            <rect
              x="350"
              y="100"
              width="100"
              height="40"
              rx="5"
              fill="#eff6ff"
              stroke="#3b82f6"
            />
            <text x="400" y="120" textAnchor="middle" fontSize="12">
              Será usada em
            </text>
            <text x="400" y="135" textAnchor="middle" fontSize="12">
              mais de um lugar?
            </text>

            <rect
              x="200"
              y="180"
              width="100"
              height="40"
              rx="5"
              fill="#bfdbfe"
              stroke="#3b82f6"
            />
            <text x="250" y="205" textAnchor="middle" fontSize="12">
              Componente Reutilizável
            </text>

            <rect
              x="500"
              y="180"
              width="100"
              height="40"
              rx="5"
              fill="#eff6ff"
              stroke="#3b82f6"
            />
            <text x="550" y="200" textAnchor="middle" fontSize="12">
              Complexidade
            </text>
            <text x="550" y="215" textAnchor="middle" fontSize="12">
              alta?
            </text>

            <rect
              x="200"
              y="260"
              width="100"
              height="40"
              rx="5"
              fill="#eff6ff"
              stroke="#3b82f6"
            />
            <text x="250" y="280" textAnchor="middle" fontSize="12">
              Muito específico
            </text>
            <text x="250" y="295" textAnchor="middle" fontSize="12">
              do domínio?
            </text>

            <rect
              x="400"
              y="260"
              width="100"
              height="40"
              rx="5"
              fill="#eff6ff"
              stroke="#3b82f6"
            />
            <text x="450" y="280" textAnchor="middle" fontSize="12">
              Mais de 200
            </text>
            <text x="450" y="295" textAnchor="middle" fontSize="12">
              linhas?
            </text>

            <rect
              x="600"
              y="260"
              width="100"
              height="40"
              rx="5"
              fill="#93c5fd"
              stroke="#3b82f6"
            />
            <text x="650" y="285" textAnchor="middle" fontSize="12">
              Componente de Feature
            </text>

            <rect
              x="100"
              y="340"
              width="120"
              height="40"
              rx="5"
              fill="#93c5fd"
              stroke="#3b82f6"
            />
            <text x="160" y="365" textAnchor="middle" fontSize="12">
              Componente de Feature
            </text>

            <rect
              x="280"
              y="340"
              width="120"
              height="40"
              rx="5"
              fill="#60a5fa"
              stroke="#3b82f6"
            />
            <text x="340" y="365" textAnchor="middle" fontSize="12">
              Componente UI Genérico
            </text>

            <rect
              x="460"
              y="340"
              width="120"
              height="40"
              rx="5"
              fill="#93c5fd"
              stroke="#3b82f6"
            />
            <text x="520" y="365" textAnchor="middle" fontSize="12">
              Dividir em Subcomponentes
            </text>

            <line
              x1="400"
              y1="60"
              x2="400"
              y2="100"
              stroke="#64748b"
              strokeWidth="1.5"
            />

            <line
              x1="400"
              y1="140"
              x2="350"
              y2="170"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text
              x="330"
              y="160"
              textAnchor="middle"
              fontSize="10"
              fill="#64748b"
            >
              Sim
            </text>

            <line
              x1="400"
              y1="140"
              x2="450"
              y2="170"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text
              x="470"
              y="160"
              textAnchor="middle"
              fontSize="10"
              fill="#64748b"
            >
              Não
            </text>

            <line
              x1="250"
              y1="220"
              x2="250"
              y2="260"
              stroke="#64748b"
              strokeWidth="1.5"
            />

            <line
              x1="550"
              y1="220"
              x2="450"
              y2="250"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text
              x="490"
              y="240"
              textAnchor="middle"
              fontSize="10"
              fill="#64748b"
            >
              Sim
            </text>

            <line
              x1="550"
              y1="220"
              x2="650"
              y2="250"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text
              x="610"
              y="240"
              textAnchor="middle"
              fontSize="10"
              fill="#64748b"
            >
              Não
            </text>

            <line
              x1="250"
              y1="300"
              x2="160"
              y2="330"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text
              x="190"
              y="320"
              textAnchor="middle"
              fontSize="10"
              fill="#64748b"
            >
              Sim
            </text>

            <line
              x1="250"
              y1="300"
              x2="340"
              y2="330"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text
              x="310"
              y="320"
              textAnchor="middle"
              fontSize="10"
              fill="#64748b"
            >
              Não
            </text>

            <line
              x1="450"
              y1="300"
              x2="520"
              y2="330"
              stroke="#64748b"
              strokeWidth="1.5"
            />
            <text
              x="500"
              y="320"
              textAnchor="middle"
              fontSize="10"
              fill="#64748b"
            >
              Sim
            </text>
          </svg>
        </div>

        <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h3 className="font-medium text-gray-900 mb-2">
            Como usar esta árvore de decisão:
          </h3>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Comece pela raiz "Nova Implementação"</li>
            <li>Avalie cada questão e siga o caminho correspondente</li>
            <li>Continue até chegar a uma folha (recomendação final)</li>
            <li>Use o resultado como um guia, não como uma regra rígida</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default DecisionTree;
