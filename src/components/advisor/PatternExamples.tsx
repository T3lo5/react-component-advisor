import React from "react";
import { CodePattern } from "../../types";
import Card from "../common/Card";
import CodeBlock from "../common/CodeBlock";

interface PatternExamplesProps {
  patterns: CodePattern[];
}

const PatternExamples: React.FC<PatternExamplesProps> = ({ patterns }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Padrões de Componentização</h2>
      <p className="text-gray-600 mb-6">
        Estes padrões são práticas recomendadas para resolver problemas comuns
        na componentização React.
      </p>

      <div className="space-y-8">
        {patterns.map((pattern) => (
          <Card key={pattern.id} className="overflow-hidden">
            <Card.Header>
              <h3 className="text-lg font-semibold">{pattern.name}</h3>
            </Card.Header>
            <Card.Body>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2 text-gray-900">Problema:</h4>
                  <p className="text-gray-700 mb-4">{pattern.problem}</p>

                  <h4 className="font-medium mb-2 text-gray-900">Solução:</h4>
                  <p className="text-gray-700 mb-4">{pattern.solution}</p>

                  <h4 className="font-medium mb-2 text-gray-900">
                    Características:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {pattern.characteristics.map((char, index) => (
                      <li key={index}>{char}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-gray-900">
                    Exemplo de Código:
                  </h4>
                  <CodeBlock code={pattern.codeExample} language="tsx" />
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PatternExamples;
