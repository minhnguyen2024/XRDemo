////////////////////////////////////////////////////////////////////////////////
// File:            QuizWrapper.js
// Authors:         Minh Nguyen
// Acknowledgments: None
// Contacts:        minhnguyen_2024@depauw.edu
////////////////////////////////////////////////////////////////////////////////
import QuizContainer from './QuizContainer'
import React, {useState, useEffect} from 'react'


class QuizWrapper extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            quizzes: []
        }
    }
    render(){
        return (
            <div>
                <QuizContainer quizzes={this.state.quizzes}/>
            </div>
        )

    }

    
}

export default QuizWrapper