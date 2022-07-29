import { Button } from 'bootstrap'
import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';

import Accordion from 'react-bootstrap/Accordion';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const EditLecture =(props)=>{
    const[lectures, setLectures] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8003/lectureCollection').then(res => res.json()).then(data => setLectures(data))
    }, [])


    const [wantedID, setWantedID] = useState('')


    const [searchValue, setSearchValue] = useState('')

    const filteredLectures = lectures.filter((lecture) =>{
        return lecture.lectureID.includes(searchValue)
    })

    const shouldDisplayButton = searchValue.length > 0;

    const handleClearClick = () =>{
        setSearchValue("")
    }

    // const wantedID = 'day1'
    var wantedLecture = {}
    

    console.log(lectures)
    for(let i = 0; i < lectures.length; i++){
        if (lectures[i].lectureID == wantedID){
            wantedLecture = lectures[i]
        }
    }

    console.log(wantedLecture)
    console.log(wantedLecture.lectureTitle)

    const handleSearchValueChange = (event) =>{
        setSearchValue(event.target.value)
    }

    return (<div>
        <h1>Edit Lecture</h1>
     
        <input type='text' onChange={handleSearchValueChange} value={searchValue}></input>
        {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}
       
        {
            filteredLectures.map((lecture)=>{
                return (
                    <Card style={{ width: '40rem' }}>
                        <Card.Body>
                            <Card.Subtitle>{lecture.lectureID}</Card.Subtitle>
                            <Accordion> 
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>{lecture.lectureTitle}</Accordion.Header>
                                    <Accordion.Body>
                                        {lecture.lectureContent}
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>        
                        </Card.Body>
                    </Card>
                
                )
            })
        }



 

            

        
    </div>)
}


export default EditLecture
{/* <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col></Col>
                        </Col>
        ))}

</Row> */}



{/* <form onSubmit={handleSearchLectureSubmit}>
            <input type='text' 
            placeholder='enter LectureID'
            onChange={handleSearchLectureChange}
            >
            </input>
            <Button type='submit'>Search</Button>
        </form> */}


        // const handleSearchLectureChange = (event) =>{
    //     setWantedID(event.target.value)
    // }
    // const handleSearchLectureSubmit = (event) =>{
    //     event.preventDefault()

    // }

// <ul key ={lecture.id}>
                    //     <li key={lecture.lectureID}> {lecture.lectureID}</li>
                    //     <li key={lecture.lectureTitle}> {lecture.lectureTitle}</li>

                    // </ul>