import React from 'react'
import { Review } from '../Review/Review'
import { NoReview } from '../NoReview/NoReview'
import './ReviewBox.css'

export const ReviewBox = ({ reviews, deleteReview}) => {
    const reviewsList = reviews.map(review => {
        return (
            <Review 
                key={review.question}
                question={review.question}
                correctAnswer={review.correct_answer}
                incorrectAnswers={review.incorrect_answers}
            />
        )
    })

    return (
        <section className='review-page'> 
            {reviewsList.length ? reviewsList : <NoReview />}
        </section>
    )
}

// need to pass down Review Component
// // Question + Answers (Correct Answer Highlighted)

// in the return, need to conditionally render
// <section className={reviews.length ? 'review-page' : 'no-reviews'}>
// { reviews.length ? reviewsList (reviewable questions) : <NoReview /> }