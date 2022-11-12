import React from 'react'
import './ReviewBox.css'

export const ReviewBox = () => {
    return (
        <section className='review-page'> 
            <p>Rawr I'm your reviewable questions</p>
        </section>
    )
}

// need to pass down Review Component
// // Question + Answers (Correct Answer Highlighted)

// in the return, need to conditionally render
// <section className={reviews.length ? 'review-page' : 'no-reviews'}>
// { reviews.length ? reviewsList (reviewable questions) : <NoReview /> }