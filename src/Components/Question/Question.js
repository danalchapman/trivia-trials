import React from 'react'
import './Question.css'

export const Question = ({ currentQuestion }) => {
    // category, type, question, correct_answer, incorrect_answer, difficulty

    return (
        <article className='question-card'>
            <h3 className='question-text'>{currentQuestion.question}</h3>
            {/* <p>{currentQuestion.correct_answer}</p>
            <p>{currentQuestion.incorrect_answers.join(' ')}</p> */}
            <button className='question-btn'>Flag for Review</button>
            <button className='question-btn'>Next Question</button>
        </article>
    )
}