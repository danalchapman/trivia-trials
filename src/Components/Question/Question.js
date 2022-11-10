import React, { useEffect, useState } from 'react'
import './Question.css'

export const Question = ({ currentQuestion }) => {
    // currentQuestion properties: category, type, question, correct_answer, incorrect_answer, difficulty
    const [allAnswers, setAllAnswers] = useState([])

    useEffect(() => {
        const totalAnswers = currentQuestion.incorrect_answers.map(answer => answer)
        const mixAnswers = Math.floor(Math.random() * Math.floor(totalAnswers.length))
        totalAnswers.splice(mixAnswers, 0, currentQuestion.correct_answer)
        setAllAnswers(totalAnswers)
    }, [currentQuestion])

    // console.log(currentQuestion.correct_answer)
    // console.log(currentQuestion.incorrect_answers)
    // console.log(allAnswers)

    return (
        <article className='question-card'>
            <h3 className='question-text'>{currentQuestion.question}</h3>
            <h4 className='question-text'>{allAnswers}</h4>
            <span className='btn-styling'>
                <button className='question-btn'>Save for Review</button>
                <button className='question-btn'>Next Question</button>
            </span>
        </article>
    )
}