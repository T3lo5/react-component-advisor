import React, { useState, useEffect } from "react";
import { ChecklistQuestion, QuestionCategory } from "../../types";
import Button from "../common/Button";
import Card from "../common/Card";
import { translateCategory } from "../../data/translations";

interface ChecklistProps {
  questions: ChecklistQuestion[];
  answers: Record<string, "yes" | "no" | "maybe" | undefined>;
  onAnswer: (questionId: string, value: "yes" | "no" | "maybe") => void;
  category: QuestionCategory;
  categoryProgress: { total: number; answered: number; percentage: number };
  totalProgress: { total: number; answered: number; percentage: number };
  onNextCategory: () => void;
  onPrevCategory: () => void;
  onShowResults: () => void;
  isComplete: boolean;
  isCategoryComplete: (category: QuestionCategory) => boolean;
}

const Checklist: React.FC<ChecklistProps> = ({
  questions,
  answers,
  onAnswer,
  category,
  categoryProgress,
  totalProgress,
  onNextCategory,
  onPrevCategory,
  onShowResults,
  isComplete,
  isCategoryComplete,
}) => {
  const categoryDisplay = translateCategory(category);

  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setShowWarning(false);
  }, [category]);

  const handleNext = () => {
    if (categoryProgress.percentage < 100) {
      setShowWarning(true);
      const firstUnansweredQuestion = questions.find((q) => !answers[q.id]);
      if (firstUnansweredQuestion) {
        const element = document.getElementById(
          `question-${firstUnansweredQuestion.id}`
        );
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    } else {
      onNextCategory();
    }
  };

  return (
    <div className="space-y-6 p-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Categoria: {categoryDisplay}</h2>
        <div className="text-sm text-gray-600">
          {categoryProgress.answered} de {categoryProgress.total} respondidas
        </div>
      </div>

      {showWarning && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-yellow-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-700">
                Por favor, responda todas as perguntas desta categoria antes de
                avançar.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-primary-600 h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${categoryProgress.percentage}%` }}
        ></div>
      </div>

      <div className="space-y-4">
        {questions.map((question) => (
          <Card
            key={question.id}
            id={`question-${question.id}`}
            className={`transition-all duration-200 hover:shadow-md ${
              !answers[question.id] && showWarning
                ? "border-2 border-yellow-300"
                : ""
            }`}
          >
            <Card.Body>
              <div className="flex flex-col">
                <div className="flex-1">
                  <p className="mb-2 font-medium">{question.text}</p>
                  {question.tip && (
                    <p className="text-sm text-gray-600 italic mb-3">
                      {question.tip}
                    </p>
                  )}
                </div>
                <div className="flex space-x-4 mt-4">
                  <Button
                    variant={
                      answers[question.id] === "yes" ? "primary" : "outline"
                    }
                    size="sm"
                    onClick={() => onAnswer(question.id, "yes")}
                  >
                    Sim
                  </Button>
                  <Button
                    variant={
                      answers[question.id] === "no" ? "primary" : "outline"
                    }
                    size="sm"
                    onClick={() => onAnswer(question.id, "no")}
                  >
                    Não
                  </Button>
                  <Button
                    variant={
                      answers[question.id] === "maybe" ? "primary" : "outline"
                    }
                    size="sm"
                    onClick={() => onAnswer(question.id, "maybe")}
                  >
                    Talvez
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <Button variant="secondary" onClick={onPrevCategory}>
          Categoria Anterior
        </Button>
        <div className="text-center">
          <div className="text-sm text-gray-700 mb-2">
            Progresso Total: {Math.round(totalProgress.percentage)}%
          </div>
          <div className="w-32 bg-gray-200 rounded-full h-2.5 mx-auto">
            <div
              className="bg-green-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${totalProgress.percentage}%` }}
            ></div>
          </div>
        </div>
        {isComplete ? (
          <Button variant="primary" onClick={onShowResults}>
            Ver Resultados
          </Button>
        ) : (
          <Button variant="primary" onClick={handleNext}>
            Próxima Categoria
          </Button>
        )}
      </div>
    </div>
  );
};

export default Checklist;
