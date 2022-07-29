import React, {useState, useEffect} from 'react'
import ReactDisplayQuiz from './ReactDisplayQuiz'
import ReactQuizForm from './ReactQuizForm'

const QuizContainer = () =>{
    const [quizzes, setQuizzes] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8001/quizColection').then(res => res.json()).then(data => setQuizzes(data))
    }, [])

    return <div>
        {/* <ReactQuizForm/> */}
        {quizzes.map(quiz=>(
            <ReactDisplayQuiz quiz={quiz}/>
        ))}
    </div>
}

export default QuizContainer;