import React from "react";
import { useEfferct, useState } from 'react'

export default function firstScreen(props){
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    return(
        <div className="bg-gradient-to-r from-blue-800 to-indigo-900 h-screen w-screen flex justify-center items-center">
            <div className="min-h-[50%] min-w-[30%] m-[30px] bg-indigo-200 rounded-lg shadow-2xl grid place-items-center p-[50px] ">
                <h1 className="text-[40px] font-bold tracking-[0.1em] bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-700 bg-clip-text text-transparent">Quizzical</h1>
                <p className="text-sm font-bold tracking-[0.1em] bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-700 bg-clip-text text-transparent text-center">Try this awesome kviz. Do your best and share your result with friends.</p>
                <p className="text-sm font-bold tracking-[0.1em] bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-700 bg-clip-text text-transparent">Have fun!</p>
                <button className=' text-lg font-bold text-white w-[190px] h-[60px] tracking-[0.3em] rounded-lg shadow-md bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-700' onClick={props.switchScreen}>Start kviz</button>
            </div>
        </div>
    )
}