import React from "react";
import { ComponentType } from "../../types";

interface ComponentTypesProps {
  componentTypes: ComponentType[];
}

const ComponentTypes: React.FC<ComponentTypesProps> = ({ componentTypes }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Tipos de Componentes</h2>
      <p className="text-gray-600 mb-6">
        Entender os diferentes tipos de componentes ajuda a decidir onde
        implementar e como estruturar seu código.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left font-medium text-gray-900">
                Tipo
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-900">
                Descrição
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-900">
                Exemplos
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-900">
                Quando Usar
              </th>
              <th className="py-3 px-4 text-left font-medium text-gray-900">
                Pasta
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {componentTypes.map((type, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="py-4 px-4 font-medium text-gray-900">
                  {type.name}
                </td>
                <td className="py-4 px-4 text-gray-700">{type.description}</td>
                <td className="py-4 px-4 text-gray-700">{type.examples}</td>
                <td className="py-4 px-4 text-gray-700">{type.whenToUse}</td>
                <td className="py-4 px-4">
                  <code className="text-sm text-primary-700 bg-primary-50 px-1 py-0.5 rounded">
                    {type.folder}
                  </code>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-100">
        <h3 className="text-lg font-medium text-blue-800 mb-3">
          Dicas de Organização
        </h3>
        <ul className="space-y-3 text-blue-800">
          <li className="flex items-start">
            <span className="inline-block w-5 h-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center mr-2 mt-0.5">
              1
            </span>
            <span>
              Mantenha uma estrutura de pasta consistente para cada tipo de
              componente
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-5 h-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center mr-2 mt-0.5">
              2
            </span>
            <span>
              Use barrels (index.ts) para exportar componentes e simplificar
              importações
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-5 h-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center mr-2 mt-0.5">
              3
            </span>
            <span>
              Separe tipos, estilos e lógica de negócio em arquivos diferentes
              para componentes maiores
            </span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-5 h-5 rounded-full bg-blue-200 text-blue-800 flex items-center justify-center mr-2 mt-0.5">
              4
            </span>
            <span>
              Documente a API pública (props) de componentes compartilhados
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ComponentTypes;
