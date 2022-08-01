
import QuizContainer from './QuizContainer'
import React, {useState, useEffect} from 'react'
import { render } from '@testing-library/react'

class QuizWrapper extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            quizzes: []
        }
    }
    // const [quizzes, setQuizzes] = useState([])

    // useEffect(()=>{
    //     fetch('http://localhost:8001/quizCollection').then(res => res.json()).then(data => setQuizzes(data))
    // }, [])   

    // ComponentWillMount(){
    //     fetch('http://localhost:8001/quizCollection').then(res => res.json()).then(data => 
    //     this.setState(()=>{
    //         return{
    //           quizzes: data
    //         }
    //       })
    //     )
    // }

    render(){
        return (
            <div>
                <QuizContainer quizzes={this.state.quizzes}/>
            </div>
        )

    }

    
}

export default QuizWrapper