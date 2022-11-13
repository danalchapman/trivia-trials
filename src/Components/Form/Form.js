import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Form.css'

const skulls = require('../../Assets/skulls.jpg')

export const Form = ({ setDifficulty }) => {
    return (
        <section className='landing-page'>
            <div className='form-style'>
                <h2>Ready to Begin?</h2>
                <form className='difficulty-form'>
                    <select
                        className='difficulty-dropdown'
                        name='difficulty'
                        onChange={event => setDifficulty(event.target.value)}
                    >
                        <option disabled value='Select Difficulty'>Select Difficulty</option>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                    <Link to='/trivia'>
                        <button className='submit-difficulty'>Enter the Dungeon</button>
                    </Link>
                </form>
            </div>
            <img className='skulls' src={skulls} alt='skulls on a wall' />
        </section>
    )
}

Form.propTypes = {
    setDifficulty: PropTypes.func
}