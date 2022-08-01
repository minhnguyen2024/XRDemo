import React, {useState, useEffect, useLayoutEffect} from 'react'
import ReactDisplayQuiz from './ReactDisplayQuiz'
// import {Button} from 'mui'


const QuizContainer = (props) =>{
    const [quizzes, setQuizzes] = useState([])
    const [currentDisplayingQuizID, setCurrentDisplayingQuizID] = useState(0)
    const [currentQuiz, setCurrentQuiz] = useState(quizzes[0])
    const [quizStart, setQuizStart] = useState(false)

    useEffect(()=>{
        fetch('http://localhost:8001/quizCollection').then(res => res.json()).then(data => setQuizzes(data))
    }, [])

    const handleNavigationClick= (event) =>{
        if(event.target.name == 'start'){
            setQuizStart(true)
            setCurrentDisplayingQuizID(0)
            setCurrentQuiz(quizzes[currentDisplayingQuizID])
        }
        else if (event.target.name == 'next'){
            setCurrentDisplayingQuizID(currentDisplayingQuizID + 1)
            setCurrentQuiz(quizzes[currentDisplayingQuizID])

        }
        else if (event.target.name == 'previous'){
            setCurrentDisplayingQuizID(currentDisplayingQuizID - 1)
            setCurrentQuiz(quizzes[currentDisplayingQuizID])
        }
    }
    

    return <div>
        
        {quizStart && <ReactDisplayQuiz quiz={currentQuiz}/>} 
            
        {!quizStart && <button name='start' onClick={handleNavigationClick}>Start</button>}
        
        {quizStart && <button name='previous' onClick={handleNavigationClick}>Previous</button>}

        {quizStart && <button name='next' onClick={handleNavigationClick}>Next</button>}
    </div>
}

export default QuizContainer;