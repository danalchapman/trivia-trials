import React from 'react'
import { Link } from 'react-router-dom'
import './Form.css'

export const Form = ({ difficulty, setDifficulty }) => {

    return (
        <section className='landing-page'>
            <h2>Ready to Begin?</h2>
            <form>
                <select
                    className='difficulty-dropdown'
                    name='difficulty'
                    value={difficulty}
                    onChange={event => setDifficulty(event.target.value)}
                >
                    <option disabled value='Select Difficulty'>Select Difficulty</option>
                    <option value='easy'>Easy</option>
                    <option value='medium'>Medium</option>
                    <option value='hard'>Hard</option>
                </select>
                <Link to='/trivia'>
                    <button
                        className='submit-difficulty'
                        // onClick={() => setDifficulty(difficulty)}
                    >Enter the Dungeon</button>
                </Link>
            </form>
        </section>
    )
}