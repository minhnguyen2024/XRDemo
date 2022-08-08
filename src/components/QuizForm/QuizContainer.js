////////////////////////////////////////////////////////////////////////////////
// File:            QuizContainer.js
// Authors:         Minh Nguyen
// Acknowledgments: None
// Contacts:        minhnguyen_2024@depauw.edu
////////////////////////////////////////////////////////////////////////////////

import React, {useState, useEffect, useLayoutEffect} from 'react'
import ReactDisplayQuiz from './ReactDisplayQuiz'
import Button from 'react-bootstrap/Button';
import './quiz.css'

import  Box  from '@mui/material/Box';

const QuizContainerStyle = {
    navButton:{
        padding: '10px',
        margin: '10px',
        width: 300
    }
}

const QuizContainer = (props) =>{
    const [quizzes, setQuizzes] = useState([])
    const [currentDisplayingQuizID, setCurrentDisplayingQuizID] = useState(0)
    const [currentQuiz, setCurrentQuiz] = useState(quizzes[0])
    const [curQuizArr, setCurQuizArr] = useState([quizzes[0]])
    const [quizStart, setQuizStart] = useState(false)

    useEffect(()=>{
        fetch('http://localhost:8001/quizCollection').then(res => res.json()).then(data => setQuizzes(data))
    }, [])

    const refreshPage = ()=> {
        window.location.reload(false);
      }

    const handleNavigationClick= (event) =>{
        if(event.target.name == 'start'){
            setQuizStart(true)
            setCurrentDisplayingQuizID(0)
            setCurrentQuiz(quizzes[currentDisplayingQuizID])
            setCurQuizArr([quizzes[currentDisplayingQuizID]])
        }
        else if (event.target.name == 'next'){
            setCurrentDisplayingQuizID(currentDisplayingQuizID + 1)
            setCurrentQuiz(quizzes[currentDisplayingQuizID])
            setCurQuizArr([quizzes[currentDisplayingQuizID]])

        }
        else if (event.target.name == 'previous'){
            setCurrentDisplayingQuizID(currentDisplayingQuizID - 1)
            setCurrentQuiz(quizzes[currentDisplayingQuizID])
            setCurQuizArr([quizzes[currentDisplayingQuizID]])

        }
    }
    

    return <div>
        { quizStart && curQuizArr.map(quiz=>(
            <ReactDisplayQuiz quiz={quiz}/>
        ))}
        
        {/* {quizStart && <ReactDisplayQuiz quiz={currentQuiz}/>}  */}
            
       
        
        
        <Box
            m={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
                 {!quizStart && <Button name='start' onClick={handleNavigationClick} className='button'>Start</Button>}

                {quizStart && <Button name='previous' onClick={handleNavigationClick} className='nav-button' 
                style={QuizContainerStyle.navButton}
                sx={{m: 2, p: 2}}>Previous</Button>}

                {quizStart && <Button name='next' onClick={handleNavigationClick} className='nav-button'
                    style={QuizContainerStyle.navButton}
                    sx={{m: 2, p: 2}}>Next</Button>}
        </Box>
    </div>
}

export default QuizContainer;