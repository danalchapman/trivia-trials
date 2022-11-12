import React from 'react'
import './Review.css'

export const Review = ({ question, correctAnswer, incorrectAnswers, deleteReview }) => {
    let incorrectText = incorrectAnswers.join(', ')

    return (
        <article className='review-list'>
            <h3 className='question'>{question}</h3>
            <p className='answer'>Correct Answer: <span className='correct'>{correctAnswer}</span></p>
            <p className='answer'>Incorrect Answers: <span className='incorrect'>{incorrectText}</span></p>
            <button className='remove-review' onClick={deleteReview}>Delete</button>
        </article>
    )
}