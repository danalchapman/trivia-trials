import React from 'react'
import { Link } from 'react-router-dom'
import './NoReview.css'

export const NoReview = () => {
    return (
        <article className='no-reviews'>
            <h2>Turn back... there is nothing for you here.</h2>
            <Link to='/'><button className='return-home'>Return to the surface...</button></Link>
        </article>
    )
}