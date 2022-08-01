import React, {useState, useEffect, useLayoutEffect} from 'react'
import ReactDisplayQuiz from './ReactDisplayQuiz'
import { Button } from 'bootstrap'


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