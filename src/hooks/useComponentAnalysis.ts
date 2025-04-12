import { useState, useCallback, useMemo } from 'react';
import { ChecklistAnswer, AnalysisResult, QuestionCategory } from '../types';
import { analyzeAnswers } from '../data/decision-logic';
import { checklistQuestions } from '../data/checklist-questions';
import { useLocalStorage } from './useLocalStorage';

export const useComponentAnalysis = () => {
    const [answers, setAnswers] = useLocalStorage<ChecklistAnswer>('component-advisor-answers', {});
    const [showResults, setShowResults] = useState(false);
    const [currentCategory, setCurrentCategory] = useState<QuestionCategory>('reusability');

    const categories = useMemo(() =>
        Array.from(
            new Set(checklistQuestions.map(q => q.category))
        ) as QuestionCategory[],
        []
    );

    const questionsByCategory = useMemo(() =>
        categories.reduce<Record<QuestionCategory, typeof checklistQuestions>>((acc, category) => {
            acc[category] = checklistQuestions.filter(q => q.category === category);
            return acc;
        }, {} as Record<QuestionCategory, typeof checklistQuestions>),
        [categories]
    );

    const isCategoryComplete = useCallback((category: QuestionCategory): boolean => {
        const questions = questionsByCategory[category] || [];
        return questions.every(q => !!answers[q.id]);
    }, [questionsByCategory, answers]);

    const getNextIncompleteCategory = useCallback((): QuestionCategory => {
        if (!isCategoryComplete(currentCategory)) {
            return currentCategory;
        }

        const currentIndex = categories.indexOf(currentCategory);

        for (let i = 1; i <= categories.length; i++) {
            const nextIndex = (currentIndex + i) % categories.length;
            const nextCategory = categories[nextIndex];
            if (!isCategoryComplete(nextCategory)) {
                return nextCategory;
            }
        }

        const nextIndex = (currentIndex + 1) % categories.length;
        return categories[nextIndex];
    }, [currentCategory, categories, isCategoryComplete]);

    const handleAnswer = useCallback((questionId: string, value: 'yes' | 'no' | 'maybe') => {
        setAnswers((prev: ChecklistAnswer) => ({ ...prev, [questionId]: value }));
    }, [setAnswers]);

    const resetAnswers = useCallback(() => {
        setAnswers({} as ChecklistAnswer);
        setShowResults(false);
    }, [setAnswers]);

    const nextCategory = useCallback(() => {
        const nextCat = getNextIncompleteCategory();
        setCurrentCategory(nextCat);
    }, [getNextIncompleteCategory]);

    const prevCategory = useCallback(() => {
        const currentIndex = categories.indexOf(currentCategory);
        const prevIndex = currentIndex === 0 ? categories.length - 1 : currentIndex - 1;
        setCurrentCategory(categories[prevIndex]);
    }, [currentCategory, categories]);

    const getCurrentQuestions = useCallback(() => {
        return questionsByCategory[currentCategory] || [];
    }, [currentCategory, questionsByCategory]);

    const getCategoryProgress = useCallback(() => {
        const questions = questionsByCategory[currentCategory] || [];
        const answeredCount = questions.filter(q => !!answers[q.id]).length;
        return {
            total: questions.length,
            answered: answeredCount,
            percentage: questions.length > 0 ? (answeredCount / questions.length) * 100 : 0
        };
    }, [currentCategory, questionsByCategory, answers]);

    const getTotalProgress = useCallback(() => {
        const totalQuestions = checklistQuestions.length;
        const answeredQuestions = Object.keys(answers).length;
        return {
            total: totalQuestions,
            answered: answeredQuestions,
            percentage: (answeredQuestions / totalQuestions) * 100
        };
    }, [answers]);

    const isComplete = useCallback(() => {
        return categories.every(category => isCategoryComplete(category));
    }, [categories, isCategoryComplete]);

    const getResults = useCallback((): AnalysisResult => {
        return analyzeAnswers(answers);
    }, [answers]);

    return {
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
        isCategoryComplete
    };
};