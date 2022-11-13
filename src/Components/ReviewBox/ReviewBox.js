import React from 'react'
import { Review } from '../Review/Review'
import { NoReview } from '../NoReview/NoReview'
import PropTypes from 'prop-types'
import './ReviewBox.css'

export const ReviewBox = ({ reviews, deleteReview }) => {
    const reviewsList = reviews.map(review => {
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

ReviewBox.propTypes = {
    reviews: PropTypes.array,
    deleteReview: PropTypes.func
}