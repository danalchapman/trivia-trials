import React, { useState, useEffect } from 'react'
import { Question } from '../Question/Question'
import { getData } from '../../apiCalls'
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

    const addReview = (question) => {
        const reviewQuestion = {
            question: questions[questionIndex].question,
            correctAnswer: questions[questionIndex].correctAnswer,
            incorrectAnswers: questions[questionIndex].incorrectAnswers
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
        />
    }

    return (
        <section className='questions'>
            { error && <h2>{error}</h2> }
            { questions[0] ? generateCurrentQuestion() : <h4 className='loading-msg'>Loading your task...</h4> }
        </section>
    )
}