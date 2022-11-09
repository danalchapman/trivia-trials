import React from 'react'
import './Form.css'

export const Form = ({ difficulty, setDifficulty }) => {
    

    return (
        <section className='landing-page'>
            <h2>Ready to Begin?</h2>
            <form>
                <select
                    className='difficulty-dropdown'
                    name='difficulty'
                    defaultValue='Select Difficulty'
                    // onChange={event => renderQuestions(event.target.value)}
                >
                    <option disabled value='Select Difficulty'>Select Difficulty</option>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                </select>
                <button
                    className='submit-difficulty'
                    // onClick={}
                >Enter the Dungeon</button>
            </form>
        </section>
    )
}