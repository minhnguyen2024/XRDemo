import { Button } from 'bootstrap'
import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card';

import Accordion from 'react-bootstrap/Accordion';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Input } from '@mui/material';


const EditLecture =(props)=>{
    const[lectures, setLectures] = useState([])
    useEffect(()=>{
        fetch('http://localhost:8003/lectureCollection').then(res => res.json()).then(data => setLectures(data))
    }, [])

    const [editID, setEditID] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editContent, setEditContent] = useState('')
    

    const [wantedID, setWantedID] = useState('')
    const [searchValue, setSearchValue] = useState('')

    const [wantedLectures, setWantedLectures] = useState([])
    const [wantedLecture, setWantedLecture] = useState({})

    const shouldDisplayButton = searchValue.length > 0;

    

    const [id, setID] = useState('')
    
    

    const handleWantedIDChange = (event) =>{
        setWantedID(event.target.value)
    }

    const handleWantedIDSubmit = (event) =>{
        event.preventDefault();
        console.log("wantedID ", wantedID)

        var temp = lectures.filter((lecture) =>{
            // console.log(lecture.lectureID)
            // console.log("wantedID ",wantedID)
            return lecture.lectureID.includes(wantedID)
        })

        console.log("temp ",temp)

        setWantedLectures(temp)

        setWantedLecture(wantedLectures[0])
        // console.log("wantedLectures ",wantedLectures)
        // console.log("wantedLecture ",wantedLecture)
        // setID(wantedID)
    }


    const handleClearClick = (event) =>{
        event.preventDefault();
        setWantedID("")
    }

    const handleEditIDChange = (event) =>{
        setEditID(event.target.value)
    }

    const handleEditContentChange = (event) =>{
        setEditContent(event.target.value)
    }

    const handleEditTitleChange = (event) =>{
        setEditTitle(event.target.value)
    }

    const handleEditSubmit = (event) =>{
        event.preventDefault()
        console.log("handleEditSubmit wantedLecture[0]", wantedLectures[0])
        console.log("id ", wantedLectures[0].id)
        
        var lectureID = editID
        var lectureTitle = editTitle
        var lectureContent = editContent
        var url = 'http://localhost:8003/lectureCollection/' + id

        fetch(url,{
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body:JSON.stringify({ 
                lectureID,
                lectureTitle,
                lectureContent,  
            })
          })
    }

    return (<div>
        <h1>Edit Lecture</h1>

        <form onSubmit={handleWantedIDSubmit}>
            <input type='text' onChange={handleWantedIDChange} placeholder="Search by ID" value={wantedID}></input>
            <button>Submit</button>
        </form>

        {console.log("returned wantedLectures ", wantedLectures)}
        {console.log("returned wantedLecture[0]", wantedLectures[0])}

        {/* {console.log("returned wantedLecture ", wantedLecture)} */}

        {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}
        {
            wantedLectures.map((wantedLecture) =>{
                return (<div>
                    <input value={wantedLecture.lectureID} onChange={handleWantedIDChange}></input>

                    <h2>{wantedLecture.lectureID}</h2>
                    <h2>{wantedLecture.lectureTitle}</h2>
                    <p>{wantedLecture.lectureContent}</p>

                </div>)
                
            })
        }


       
        <form onSubmit={handleEditSubmit}>
                <input type='text' onChange={handleEditIDChange} placeholder='Edit ID'></input><br/>
                <input type='text' onChange={handleEditTitleChange} placeholder="Edit Title"></input><br/>
                <textarea type='text' onChange={handleEditContentChange} placeholder="Edit Content"></textarea><br/>
                <button type='submit'>Save Edit</button><br/>
        </form>
     
    </div>)
}


export default EditLecture


// {
//     filteredLectures.map((lecture)=>{
//         return (
//             <Card style={{ width: '40rem' }}>
//                 <Card.Body>
//                     <Card.Subtitle>{lecture.lectureID}</Card.Subtitle>
//                     <Accordion> 
//                         <Accordion.Item eventKey="0">
//                             <Accordion.Header>{lecture.lectureTitle}</Accordion.Header>
//                             <Accordion.Body>
//                                 {lecture.lectureContent}
//                             </Accordion.Body>
//                         </Accordion.Item>
//                     </Accordion>        
//                 </Card.Body>
//             </Card>
//         )
//     })
// }
