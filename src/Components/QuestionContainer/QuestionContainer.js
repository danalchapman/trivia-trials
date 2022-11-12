import React, { useState, useEffect } from 'react'
import { Question } from '../Question/Question'
import { getData } from '../../apiCalls'
import './QuestionContainer.css'

export const QuestionContainer = ({ difficulty }) => {

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

    const generateCurrentQuestion = () => {
        return <Question currentQuestion={questions[questionIndex]} questionIndex={questionIndex} setQuestionIndex={setQuestionIndex} />
    }

    return (
        <section className='questions'>
            { error && <h2>{error}</h2> }
            { questions[0] ? generateCurrentQuestion() : <h4 className='loading-msg'>Loading your task...</h4> }
        </section>
    )
}