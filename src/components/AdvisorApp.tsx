import React, { useState, useMemo } from "react";
import { TabType, QuestionCategory } from "../types";
import { useComponentAnalysis } from "../hooks/useComponentAnalysis";
import { codePatterns } from "../data/code-patterns";
import { componentTypes } from "../data/component-types";
import { translateCategory } from "../data/translations";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Tabs from "./common/Tabs";
import Checklist from "./advisor/Checklist";
import DecisionTree from "./advisor/DecisionTree";
import PatternExamples from "./advisor/PatternExamples";
import ComponentTypes from "./advisor/ComponentTypes";
import ResultView from "./advisor/ResultView";

const AdvisorApp: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("checklist");

  const {
    answers,
    showResults,
    setShowResults,
    currentCategory,
    setCurrentCategory,
    categories,
    handleAnswer,
    resetAnswers,
    nextCategory,
    prevCategory,
    getCurrentQuestions,
    getCategoryProgress,
    getTotalProgress,
    isComplete,
    getResults,
    isCategoryComplete, 
  } = useComponentAnalysis();

  const tabNames = {
    checklist: "Checklist Interativo",
    patterns: "Padrões de Código",
    types: "Tipos de Componentes",
    tree: "Árvore de Decisão",
  };

  const tabs = [
    { id: "checklist", label: tabNames.checklist },
    { id: "patterns", label: tabNames.patterns },
    { id: "types", label: tabNames.types },
    { id: "tree", label: tabNames.tree },
  ];

  const categoryTabs = useMemo(() => {
    return categories.map((category) => ({
      id: category,
      label: translateCategory(category),
    }));
  }, [categories]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId as TabType);
    if (showResults) {
      setShowResults(false);
    }
  };

  const renderContent = () => {
    if (activeTab === "checklist" && showResults) {
      return <ResultView result={getResults()} onReset={resetAnswers} />;
    }

    switch (activeTab) {
      case "checklist":
        return (
          <Checklist
            questions={getCurrentQuestions()}
            answers={answers}
            onAnswer={handleAnswer}
            category={currentCategory}
            categoryProgress={getCategoryProgress()}
            totalProgress={getTotalProgress()}
            onNextCategory={nextCategory}
            onPrevCategory={prevCategory}
            onShowResults={() => setShowResults(true)}
            isComplete={isComplete()}
            isCategoryComplete={isCategoryComplete} 
          />
        );
      case "patterns":
        return <PatternExamples patterns={codePatterns} />;
      case "types":
        return <ComponentTypes componentTypes={componentTypes} />;
      case "tree":
        return <DecisionTree />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <Header
        title="React Component Advisor"
        subtitle="Ferramenta de análise e decisão para componentização em React"
      />

      <div className="mt-6">
        <Tabs tabs={tabs} activeTab={activeTab} onChange={handleTabChange} />

        <div className="mt-6 bg-white rounded-lg border border-gray-200 shadow-sm">
          {renderContent()}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdvisorApp;
