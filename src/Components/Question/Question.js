import React from 'react'
import './Question.css'

export const Question = ({ currentQuestion }) => {
    // category, type, question, correct_answer, incorrect_answer, difficulty

    return (
        <article className='question-card'>
            <h3 className='question-text'>{currentQuestion.question}</h3>
            <p className='question-text'>{currentQuestion.correct_answer}</p>
            <p className='question-text'>{currentQuestion.incorrect_answers.join(' ')}</p>
            <span className='btn-styling'>
                <button className='question-btn'>Save for Review</button>
                <button className='question-btn'>Next Question</button>
            </span>
        </article>
    )
}