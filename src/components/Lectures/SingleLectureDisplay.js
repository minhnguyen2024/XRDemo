import React, {useState, useEffect} from 'react'
// import Lectures from '../../pages/Lectures'
// import { useSearchParams } from 'react-router-dom'

const SingleLectureDisplay =(props)=>{
    const[lectures, setLectures] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8003/lectureCollection').then(res => res.json()).then(data => setLectures(data))
    }, [])

    const wantedID = 'day1'
    console.log("wantedID ", props.wantedID)
    var wantedLecture = {}
    

    console.log(lectures)
    for(let i = 0; i < lectures.length; i++){
        if (lectures[i].lectureID == wantedID){
            wantedLecture = lectures[i]
        }
    }

    console.log(wantedLecture)
    console.log(wantedLecture.lectureTitle)



    // const [wantedID, setWantedID] = useState('')

    

    return (<div>
        <h1>{wantedLecture.lectureTitle}</h1>
        <p>{wantedLecture.lectureContent}</p>
    </div>)
}


export default SingleLectureDisplay