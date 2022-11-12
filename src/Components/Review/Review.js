import React from 'react'
import './Review.css'

export const Review = ({ question, correctAnswer, incorrectAnswers, deleteReview }) => {
    let incorrectText = incorrectAnswers.join(', ')

    return (
        <article>
            <h3>{question}</h3>
            <p>Correct Answer: {correctAnswer}</p>
            <p>Incorrect Answers: {incorrectText}</p>
            <button onClick={deleteReview}>Delete</button>
        </article>
    )
}