import React, { useEffect, useState } from 'react';
import Question from './Question';

export default function kvizScreen() {
    const [questionAPI, setQuestionAPI] = useState(null);
    const [isAnswersChecked, setIsAnswersChecked] = useState(false);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [correctCount, setCorrectCount] = useState(0);

    const fetchQuestions = () => {
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
            .then(res => res.json())
            .then(data => {
                data.results.forEach(q => {
                    q.all_answers = shuffleArray([...q.incorrect_answers, q.correct_answer]);
                });
                setQuestionAPI(data);
                setIsAnswersChecked(false);
                setSelectedAnswers({});
                setCorrectCount(0);
            });
    }

    useEffect(() => {
        fetchQuestions();
    }, []);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    const handleCheckAnswers = () => {
        if (isAnswersChecked) {
            fetchQuestions(); // Refetch questions if answers were already checked
        } else {
            let correctAnswersCount = 0;
            questionAPI.results.forEach((question, index) => {
                if (selectedAnswers[index] === question.correct_answer) {
                    correctAnswersCount++;
                }
            });
            setCorrectCount(correctAnswersCount);
            setIsAnswersChecked(true);
        }
    };

    const handleSelectAnswer = (questionIndex, answer) => {
        setSelectedAnswers(prev => ({ ...prev, [questionIndex]: answer }));
    }

    return (
        <div className="bg-gradient-to-r from-indigo-200 to-violet-50 h-auto w-auto grid place-items-center ">
        {questionAPI && questionAPI.results
            ? questionAPI.results.map((item, index) => (
                <Question
                    key={index}
                    obj={item}
                    selectedAnswer={selectedAnswers[index]}
                    onSelectAnswer={answer => handleSelectAnswer(index, answer)}
                    isAnswersChecked={isAnswersChecked}
                />
            ))
            : null}
        <div className="flex space-x-5 pt-[30px] pb-[50px] items-center space-y-5 ">
            <button 
                onClick={handleCheckAnswers} 
                className='text-lg font-bold text-white p-4 h-[60px] tracking-[0.2em] rounded-lg shadow-md bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-700'
            >
                {isAnswersChecked ? 'Try again' : 'Check Answers'}
            </button>
            {isAnswersChecked && <p className="text-[20px] pb-[25px] font-bold bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-700 bg-clip-text text-transparent">You scored {correctCount}/5 correct answers</p>}
        </div>
    </div>
    );
}
