import React, { useState } from 'react'
import './Form.css'

export const Form = () => {

    const [values, setValues] = useState({
        difficulty: ''
    })

    return (
        <section>
            <form>
                <select
                    className='difficulty-option'
                    type='text'
                    name='difficulty'
                    value={values.difficulty}
                    onChange={setValues}
                >
                    <option>Select Difficulty</option>
                </select>
            </form>
        </section>
    )
}