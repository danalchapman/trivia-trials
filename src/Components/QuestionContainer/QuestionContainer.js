import React, { useState, useEffect } from 'react'
import { Question } from '../Question/Question'
import { getData } from '../../apiCalls'
import './QuestionContainer.css'

export const QuestionContainer = ({ difficulty }) => {

    const [questions, setQuestions] = useState([])
    // const [score, setScore] = useState(0)
    const [error, setError] = useState('')
    
    useEffect(() => {
        getData(difficulty)
            .then(questions => {
                setQuestions(questions.results)
            })
            .catch(error => setError(`Oops. ${error.message} Try again.`))
    }, [difficulty])

    /* const clickAnswer = event => {
        event.preventDefault()
        if the chosen answer === currentQuestion answer
        setScore(score + 1)
    }*/

    /*const nextQuestion = () => {
        if currentQuestion <= 9
        currentQuestion + 1
    }*/

    const generateCurrentQuestion = () => {
        return <Question currentQuestion={questions[0]}  />
    }

    return (
        <section className='questions'>
            { error && <h2>{error}</h2> }
            { questions[0] ? generateCurrentQuestion() : null }
        </section>
    )
}