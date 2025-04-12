import React from "react";
import { AnalysisResult } from "../../types";
import Card from "../common/Card";
import Button from "../common/Button";

interface ResultViewProps {
  result: AnalysisResult;
  onReset: () => void;
}

const ResultView: React.FC<ResultViewProps> = ({ result, onReset }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Resultado da Análise</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <Card.Body>
            <div className="text-center">
              <p className="text-gray-600 mb-1">Pontuação de Reusabilidade</p>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-blue-200">
                  <div
                    style={{
                      width: `${(result.reusabilityScore / 10) * 100}%`,
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-600"
                  ></div>
                </div>
              </div>
              <p className="text-2xl font-bold text-blue-600">
                {result.reusabilityScore}/10
              </p>
            </div>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <div className="text-center">
              <p className="text-gray-600 mb-1">Pontuação de Complexidade</p>
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-amber-200">
                  <div
                    style={{ width: `${(result.complexityScore / 10) * 100}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-600"
                  ></div>
                </div>
              </div>
              <p className="text-2xl font-bold text-amber-600">
                {result.complexityScore}/10
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>

      <Card className="mb-6">
        <Card.Header className="bg-primary-50">
          <h3 className="font-bold text-primary-900 text-lg">
            {result.recommendationType}
          </h3>
        </Card.Header>
        <Card.Body>
          <p className="mb-4 text-gray-800">{result.recommendationDetails}</p>

          <h4 className="font-medium text-gray-900 mb-2">
            Próximos passos recomendados:
          </h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            {result.nextSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>

      <div className="flex justify-center">
        <Button onClick={onReset} variant="outline">
          Reiniciar Análise
        </Button>
      </div>
    </div>
  );
};

export default ResultView;
