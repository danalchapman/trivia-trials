import React, { useState } from 'react'
import { Nav } from '../Nav/Nav'
import { ReviewBox } from '../ReviewBox/ReviewBox'
import { Form } from '../Form/Form'
import { QuestionContainer } from '../QuestionContainer/QuestionContainer'
import { Route, Switch } from 'react-router-dom'
import './App.css'

export const App = () => {
    const [difficulty, setDifficulty] = useState('')
    const [reviews, setReviews] = useState([])
    const [reviewStatus, setReviewStatus] = useState(false)

    return (
        <main className='main-page'>
            <Nav />
            <Switch>
                <Route exact path='/'>
                    <Form difficulty={difficulty} setDifficulty={setDifficulty} />
                </Route>
                <Route path='/trivia'>
                    <QuestionContainer 
                        difficulty={difficulty} 
                        reviews={reviews}
                        setReviews={setReviews}    
                        reviewStatus={reviewStatus}
                        setReviewStatus={setReviewStatus}
                    />
                </Route>
                <Route path='/review'>
                    <ReviewBox 
                        reviewStatus={reviewStatus}
                    />
                </Route>
                {/* <Route component={BadUrl} /> */}
            </Switch>
        </main>
    )
}

