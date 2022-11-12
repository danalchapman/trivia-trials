import { Link } from 'react-router-dom'
import './BadUrl.css'

export const BadUrl = () => {
    return (
        <section className='bad-url'>
            <h2>Halt! You have made an error in your path...</h2>
            <Link to='/'><button className='home-button'>Go back towards the light..</button></Link>
        </section>
    )
}