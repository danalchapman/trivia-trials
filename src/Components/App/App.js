import React, { useState, useEffect } from 'react'
import { Nav } from '../Nav/Nav'
import { Form } from '../Form/Form'
import { Question } from '../Question/Question'
import { Review } from '../Review/Review'
import { getData } from '../../apiCalls'
import './App.css'

export const App = () => {

    const [question, setQuestion] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        getData(/* Pass in Difficulty value from Form? */)
            .then(questions => {
                setQuestion(questions)
            })
            .catch(error => setError(`Oops! You took a wrong turn down to a dead end with ${error.message} written on the wall. Turn back.`))
    }, [/* Difficulty Value? */])

    return (
        <main className='main-page'>
            <Nav />
            {error && <h2>{error}</h2>}
            <Form />
            <Question />
            <Review />
        </main>
    )
}

