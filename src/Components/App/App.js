import React, { useState, useEffect } from 'react'
import { Nav } from '../Nav/Nav'
import { Form } from '../Form/Form'
import { QuestionContainer } from '../QuestionContainer/QuestionContainer'
import { getData } from '../../apiCalls'
import './App.css'

export const App = () => {

    return (
        <main className='main-page'>
            <Nav />
            {/* {error && <h2>{error}</h2>} */}
            <Form />
            <QuestionContainer />
        </main>
    )
}

