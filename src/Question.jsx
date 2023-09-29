import React from "react";
import { decode } from 'html-entities';

export default function Question({ obj, selectedAnswer, onSelectAnswer, isAnswersChecked }) {
    const { all_answers, correct_answer } = obj;

    return (
        <div className='question w-[50%] pt-[50px] pb-[10px] pl-7 text-left'>
            <h1 className="text-[20px] font-bold tracking-[0.1em] bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-700 bg-clip-text text-transparent">
                {decode(obj.question)}
            </h1>
            <div className="grid-rows-1 pl-0 p-6  w-auto md:grid-rows-2 ">
                {all_answers.map((answer, index) => (
                    <button
                        key={index}
                        onClick={() => !isAnswersChecked && onSelectAnswer(answer)}
                        className={`p-3 text-lg font-bold text-indigo-900 h-[50px] mr-[20px] mt-6 tracking-[0.2em] rounded-lg shadow-md border border-indigo-900 
                        ${isAnswersChecked ? (answer === correct_answer ? 'bg-green-400' : (answer === selectedAnswer ? 'bg-red-400' : '')) : (answer === selectedAnswer ? 'bg-violet-300' : 'hover:bg-violet-300')}`}
                    >
                        {decode(answer)}
                    </button>
                ))}
            </div>
            <hr></hr>
        </div>
    );
}
