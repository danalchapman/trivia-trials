import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Question.css'

export const Question = ({ currentQuestion, questionIndex, setQuestionIndex, addReview, deleteReview, reviewStatus, setReviewStatus }) => {

    const thisQuestion = currentQuestion.question
    const isLastQuestion = questionIndex < 4
    const addedText = reviewStatus ? 'Saved!' : 'Save for Review' 

    const [allAnswers, setAllAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    
    useEffect(() => { 
        const totalAnswers = currentQuestion.incorrect_answers.map(answer => answer)
        const mixAnswers = Math.floor(Math.random() * Math.floor(totalAnswers.length))
        totalAnswers.splice(mixAnswers, 0, currentQuestion.correct_answer)
        setAllAnswers(totalAnswers)
    }, [currentQuestion])
    
    const clickAnswer = (value) => {
        setSelectedAnswer(value)
        if (value === currentQuestion.correct_answer) {
            setScore(prevScore => prevScore + 1)
        }
    }

    const renderButtons = () => {
        return allAnswers.map((answer, index) => {
            let btnClass
            if (selectedAnswer && selectedAnswer === answer) {
                if (answer === currentQuestion.correct_answer) {
                    btnClass = 'answer-correct'
                } else {
                    btnClass = 'answer-incorrect'
                }
            }
            return <button 
                key={index} 
                disabled={selectedAnswer} 
                className={`answer-text ${btnClass}`} 
                value={answer} 
                onClick={() => clickAnswer(answer)}>
                {answer}
            </button>
        })
    }

    const getNextQuestion = () => {
        setQuestionIndex(prevIndex => prevIndex + 1)
        setSelectedAnswer('')
        setReviewStatus(false)
    }

    return (
        <article className='question-card'>
            <h3 className='question-text'>{thisQuestion}</h3>
            {renderButtons()}
            <div className='btn-styling'>
                <button 
                    className='question-btn' 
                    onClick={reviewStatus 
                    ? () => deleteReview(thisQuestion) 
                    : () => addReview(thisQuestion, currentQuestion.correct_answer, currentQuestion.incorrect_answers)}>
                    {addedText}
                </button>
                {isLastQuestion 
                ? <button 
                    className='question-btn' 
                    disabled={!selectedAnswer} 
                    onClick={getNextQuestion}>
                    Next Question
                </button> 
                : <Link to='/'><button 
                    className='question-btn' 
                    disabled={!selectedAnswer}>
                    Return to the Surface...
                </button></Link>}
            </div>
            <p className='question-text'>{score ? `Score: ${score}/5` : `Score: 0/5` }</p>
        </article>
    )
}

Question.propTypes = {
    currentQuestion: PropTypes.object,
    questionIndex: PropTypes.number,
    setQuestionIndex: PropTypes.func,
    addReview: PropTypes.func,
    deleteReview: PropTypes.func,
    reviewStatus: PropTypes.bool,
    setReviewStatus: PropTypes.func
}