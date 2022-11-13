import React from 'react'
import PropTypes from 'prop-types'
import './Review.css'

export const Review = ({ question, correctAnswer, incorrectAnswers, deleteReview }) => {
    let incorrectText = incorrectAnswers.join(', ')

    return (
        <article className='review-list'>
            <h3 className='question'>{question}</h3>
            <p className='answer'>Correct Answer: <span className='correct'>{correctAnswer}</span></p>
            <p className='answer'>Incorrect Answers: <span className='incorrect'>{incorrectText}</span></p>
            <button className='remove-review' onClick={() => deleteReview(question)}>Delete</button>
        </article>
    )
}

Review.propTypes = {
    question: PropTypes.string,
    correctAnswer: PropTypes.string,
    incorrectAnswers: PropTypes.array,
    deleteReview: PropTypes.func
}