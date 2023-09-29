import React from 'react';
import { useEfferct, useState } from 'react'

export default function AnswerButton(props) {
    console.log(props.answer)

    return(
        <button className='p-3 text-lg font-bold text-indigo-900 h-[50px] mr-[20px] mt-6 tracking-[0.2em]
         rounded-lg shadow-md border border-indigo-900 hover:bg-indigo-100'>{props.answer}</button>
    )
}