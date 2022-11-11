import React, { useEffect, useState } from 'react'
import './Question.css'

export const Question = ({ currentQuestion, getNextQuestion }) => {

    const [allAnswers, setAllAnswers] = useState([])

    useEffect(() => { // puts answers together randomly
        const totalAnswers = currentQuestion.incorrect_answers.map(answer => answer)
        const mixAnswers = Math.floor(Math.random() * Math.floor(totalAnswers.length))
        totalAnswers.splice(mixAnswers, 0, currentQuestion.correct_answer)
        setAllAnswers(totalAnswers)
    }, [currentQuestion])

    // const clickAnswer = (event) => {
    //     event.preventDefault()
        
        
    // }

    return (
        <article className='question-card'>
            <h3 className='question-text'>{currentQuestion.question}</h3>
            <button className='question-text'  >{allAnswers[0]}</button>
            <button className='question-text'  >{allAnswers[1]}</button>
            <button className='question-text'  >{allAnswers[2]}</button>
            <button className='question-text'  >{allAnswers[3]}</button>
            <span className='btn-styling'>
                <button className='question-btn'>Save for Review</button>
                <button 
                    className='question-btn'
                    onClick={event => getNextQuestion(currentQuestion)}
                >Next Question</button>
            </span>
        </article>
    )
}