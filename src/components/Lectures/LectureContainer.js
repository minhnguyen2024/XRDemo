////////////////////////////////////////////////////////////////////////////////
// File:            LectureContainer.js
// Authors:         Minh Nguyen
// Acknowledgments: None
// Contacts:        minhnguyen_2024@depauw.edu
////////////////////////////////////////////////////////////////////////////////
import React, {useEffect, useState} from 'react'
import LectureDisplay from './LectureDisplay'

const LectureContainer = () =>{

    const[lectures, setLectures] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8004/lectureCollection').then(res => res.json()).then(data => setLectures(data))
    }, [])

    return <div>
        <LectureDisplay lectures={lectures}/>
    </div>

}

export default LectureContainer
