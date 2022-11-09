import React, { Component } from 'react'
import { getData } from '../../apiCalls'
import './App.css'

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            questions: [],
            error: ''
        }
    }

    componentDidMount = () => {
        getData()
            .then(question => this.setState({questions: question}))
            .catch(error => this.setState({error: `${error.message}`}))
    }

    render() {
        return (
            <div>
                <h1>Trivia Trials</h1>
                {/* Navigation Component w/ Links (Home, Review) */}
                {/* Home Page Component */}
                {/* Review Page Component */}
            </div>
        )
    }
}