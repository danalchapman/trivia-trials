import React, { useState, useEffect } from 'react'
import { getData } from '../../apiCalls'
import './QuestionContainer.css'

export const QuestionContainer = ({ getQuestions }) => {

    const [question, setQuestion] = useState([])

    useEffect(() => {
        getData()
            .then(questions => {
                setQuestion(questions)
            })
    })

    return (
        <article className='questions'>
            {/* {questionCard} */}
        </article>
    )
}