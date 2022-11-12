import React from 'react'
import './Review.css'

export const Review = ({ question, correctAnswer, incorrectAnswers }) => {
    return (
        <article>
            <h3>{question}</h3>
            <h4>Correct Answer: {correctAnswer}</h4>
            <p>Incorrect Answers: {incorrectAnswers}</p>
        </article>
    )
}