import React, {useEffect, useState} from 'react'
import LectureForm from './LectureForm'
import LectureDisplay from './LectureDisplay'

const LectureContainer = () =>{

    const[lectures, setLectures] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8003/lectureCollection').then(res => res.json()).then(data => setLectures(data))
    }, [])

    return <div>
        <LectureDisplay lectures={lectures}/>
    </div>

}

export default LectureContainer
