import React from 'react'
import { Review } from '../Review/Review'
import { NoReview } from '../NoReview/NoReview'
import './ReviewBox.css'

export const ReviewBox = ({ reviews, deleteReview }) => {
    const reviewsList = reviews.map(review => {
        console.log(review)
        return (
            <Review 
                key={review.question}
                question={review.question}
                correctAnswer={review.correctAnswer}
                incorrectAnswers={review.incorrectAnswers}
                deleteReview={deleteReview}
            />
        )
    })

    return (
        <section className='review-page'> 
            {reviewsList.length ? reviewsList : <NoReview />}
        </section>
    )
}

// in the return, need to conditionally render
// <section className={reviews.length ? 'review-page' : 'no-reviews'}>
// { reviews.length ? reviewsList (reviewable questions) : <NoReview /> }