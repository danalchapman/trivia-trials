import React, { useEffect, useState } from 'react'
import './Question.css'

export const Question = ({ currentQuestion, questionIndex, setQuestionIndex }) => {

    const [allAnswers, setAllAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    
    // const isLastQuestion = questionIndex === 5
    
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
            setScore(prevScore => prevScore + 1)
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

    const getNextQuestion = () => {
        setQuestionIndex(prevIndex => prevIndex + 1)
        setSelectedAnswer('')
    }

    return (
        <article className='question-card'>
            <h3 className='question-text'>{currentQuestion.question}</h3>
            {renderButtons()}
            <div className='btn-styling'>
                <button className='question-btn'>Save for Review</button>
                <button 
                    disabled={!selectedAnswer}
                    className='question-btn'
                    onClick={getNextQuestion}
                    >Next Question</button> 
            </div>
            <p className='question-text'>{score ? `Score: ${score}/5` : `Score: 0` }</p>
        </article>
    )
}