import React, { useState } from 'react'
import { Nav } from '../Nav/Nav'
import { Form } from '../Form/Form'
import { QuestionContainer } from '../QuestionContainer/QuestionContainer'
import { Route, Switch } from 'react-router-dom'
import './App.css'

export const App = () => {
    const [difficulty, setDifficulty] = useState('')

    return (
        <main className='main-page'>
            <Nav />
            <Switch>
                <Route exact path='/'>
                    <Form difficulty={difficulty} setDifficulty={setDifficulty} />
                </Route>
                <Route path='/trivia'>
                    <QuestionContainer difficulty={difficulty} />
                </Route>
                {/* <Route component={BadUrl} /> */}
            </Switch>
        </main>
    )
}

