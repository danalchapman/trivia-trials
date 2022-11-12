import React, { useEffect, useState } from 'react'
import './Question.css'

export const Question = ({ currentQuestion }) => {

    const [allAnswers, setAllAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    // const [thisQuestion, setThisQuestion] = useState({})
    
    useEffect(() => { 
        const totalAnswers = currentQuestion.incorrect_answers.map(answer => answer)
        const mixAnswers = Math.floor(Math.random() * Math.floor(totalAnswers.length))
        totalAnswers.splice(mixAnswers, 0, currentQuestion.correct_answer)
        setAllAnswers(totalAnswers)
    }, [currentQuestion])

    console.log('Correct Answer:', currentQuestion.correct_answer)
    
    const clickAnswer = (value) => {
        setSelectedAnswer(value)
        if (value === currentQuestion.correct_answer) {
            // event.currentTarget.classList.add('answer-correct')
            setScore(prevScore => prevScore + 1)
        } else {
            // event.currentTarget.classList.add('answer-incorrect')
        }
    }

    const renderButtons = () => {
        return allAnswers.map(answer => {
            let btnClass
            if (selectedAnswer && selectedAnswer === answer) {
                if (answer === currentQuestion.correct_answer) {
                    btnClass = 'answer-correct'
                } else {
                    btnClass = 'answer-incorrect'
                }
            }
            return <button disabled={selectedAnswer} className={`answer-text ${btnClass}`} value={answer} onClick={() => clickAnswer(answer)} >{answer}</button>
        })
    }

    const getNextQuestion = (event) => {
        // how to take currentQuestion(questions[0]) to currentQuestion(questions[1])
    }

    return (
        <article className='question-card'>
            <h3 className='question-text'>{currentQuestion.question}</h3>
            {renderButtons()}
            <p className='question-text'>{score ? `Score: ${score}` : `Score: 0` }</p>
            <span className='btn-styling'>
                <button className='question-btn'>Save for Review</button>
                <button 
                    className='question-btn'
                    onClick={getNextQuestion}
                >Next Question</button>
            </span>
        </article>
    )
}