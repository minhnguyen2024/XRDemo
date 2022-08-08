////////////////////////////////////////////////////////////////////////////////
// File:            AllQuizzes.js
// Authors:         Minh Nguyen
// Acknowledgments: None
// Contacts:        minhnguyen_2024@depauw.edu
////////////////////////////////////////////////////////////////////////////////
import React, {useState, useEffect} from 'react'
import ReactDisplayQuiz from './ReactDisplayQuiz'

const AllQuizzes = () =>{
    const [quizzes, setQuizzes] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8001/quizCollection').then(res => res.json()).then(data => setQuizzes(data))
    }, [])

    return <div>
        {quizzes.map(quiz=>(
            <ReactDisplayQuiz quiz={quiz}/>
        ))}

    </div>
}
export default AllQuizzes;