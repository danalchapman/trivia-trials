import React, { useEffect, useState } from 'react'
import './Question.css'

export const Question = ({ currentQuestion }) => {

    const [allAnswers, setAllAnswers] = useState([])
    const [score, setScore] = useState(0)
    const [thisQuestion, setThisQuestion] = useState({})
    
    useEffect(() => { 
        const totalAnswers = currentQuestion.incorrect_answers.map(answer => answer)
        const mixAnswers = Math.floor(Math.random() * Math.floor(totalAnswers.length))
        totalAnswers.splice(mixAnswers, 0, currentQuestion.correct_answer)
        setAllAnswers(totalAnswers)
    }, [currentQuestion])

    console.log('Correct Answer:', currentQuestion.correct_answer)
    
    const clickAnswer = (event) => {
        const answer = event.target.value
        console.log('You clicked: Correct Answer:', currentQuestion.correct_answer)
        console.log('What you clicked:', answer)
        if (answer === currentQuestion.correct_answer) {
            event.currentTarget.classList.add('answer-correct')
            setScore(prevScore => prevScore + 1)
        } else {
            event.currentTarget.classList.add('answer-incorrect')
        }
    }

    const getNextQuestion = () => {
        // how to take currentQuestion(questions[0]) to currentQuestion(questions[1])
    }

    return (
        <article className='question-card'>
            <h3 className='question-text'>{currentQuestion.question}</h3>
            <button className='answer-text' value={allAnswers[0]} id='a1' onClick={clickAnswer} >{allAnswers[0]}</button>
            <button className='answer-text' value={allAnswers[1]} id='a2' onClick={clickAnswer} >{allAnswers[1]}</button>
            <button className='answer-text' value={allAnswers[2]} id='a3' onClick={clickAnswer} >{allAnswers[2]}</button>
            <button className='answer-text' value={allAnswers[3]} id='a4' onClick={clickAnswer} >{allAnswers[3]}</button>
            <p className='question-text'>{score ? `Score: ${score}` : `Score: 0` }</p>
            <span className='btn-styling'>
                <button className='question-btn'>Save for Review</button>
                <button 
                    disabled
                    className='question-btn'
                    onClick={getNextQuestion}
                >Next Question</button>
            </span>
        </article>
    )
}