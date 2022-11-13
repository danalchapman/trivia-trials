import React, { useState, useEffect } from 'react'
import { Question } from '../Question/Question'
import { getData } from '../../apiCalls'
import PropTypes from 'prop-types'
import './QuestionContainer.css'

export const QuestionContainer = ({ difficulty, reviews, setReviews, reviewStatus, setReviewStatus, deleteReview }) => {

    const [questions, setQuestions] = useState([])
    const [questionIndex, setQuestionIndex] = useState(0)
    const [error, setError] = useState('')

    
    useEffect(() => {
        getData(difficulty)
        .then(questions => {
            setQuestions(questions.results)
        })
        .catch(error => setError(`Oops. ${error.message} Try again.`))
    }, [difficulty])
    
    const addReview = (question, correctAnswer, incorrectAnswers) => {
        const reviewQuestion = {
            question,
            correctAnswer,
            incorrectAnswers,
        }
        
        if (!reviews.some(review => review.question === question)) {
            setReviews([...reviews, reviewQuestion])
            setReviewStatus(true)
        }
    }
        
    const generateCurrentQuestion = () => {
        return <Question 
            currentQuestion={questions[questionIndex]} 
            questionIndex={questionIndex} 
            setQuestionIndex={setQuestionIndex}
            addReview={addReview}
            deleteReview={deleteReview}
            reviewStatus={reviewStatus} 
            setReviewStatus={setReviewStatus}
        />
    }

    return (
        <section className='questions'>
            { error && <h2 className='error-msg'>{error}</h2> }
            { questions.length ? generateCurrentQuestion() : <h4 className='loading-msg'>Loading your task...</h4> }
        </section>
    )
}

QuestionContainer.propTypes = {
    difficulty: PropTypes.string,
    reviews: PropTypes.array,
    setReviews: PropTypes.func,
    reviewStatus: PropTypes.bool,
    setReviewStatus: PropTypes.func,
    deleteReview: PropTypes.func
}