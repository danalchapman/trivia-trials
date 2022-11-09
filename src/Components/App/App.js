import React, { useState, useEffect } from 'react'
import { Nav } from '../Nav/Nav'
import { Form } from '../Form/Form'
import { QuestionContainer } from '../QuestionContainer/QuestionContainer'
// import { getData } from '../../apiCalls'
import './App.css'

export const App = () => {
    const [difficulty, setDifficulty] = useState('')

    return (
        <main className='main-page'>
            <Nav />
            <Form difficulty={difficulty} setDifficulty={setDifficulty} />
            <QuestionContainer difficulty={difficulty} />
        </main>
    )
}

