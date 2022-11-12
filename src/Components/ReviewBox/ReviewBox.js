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
// <section className={reviewsList.length ? 'review-page' : 'no-reviews'}>
// { reviewsList.length ? reviewsList (reviewable questions) : <NoReview /> }