import React, { useState } from 'react'



const NotesEdit = (props)=>{
    const [editID, setEditID] = useState('')


    const handleEditIDChange = (event) =>{
        setEditID(event.target.value)
    }
    
    
    const handleEditSubmit = (event) =>{
        event.preventDefault()
        console.log('editID ', editID)
        console.log("edit submitted")
        var notesID = editID
        var url = 'http://localhost:8000/notes/' + notesID
        console.log(url)
        
        var title = "editted title 3"
        var details  = 'editted details 2'
        var category = 'money'
        fetch(url,{
            method: "PUT",
            headers: {"Content-type": "application/json"},
            body:JSON.stringify({ 
              title,
              details,
              category
            })
          })
    }

    return (
        <div>
            <form onSubmit={handleEditSubmit}>
                <input type='text' onChange={handleEditIDChange}></input>
                <button type='submit' >Edit</button>
            </form>
        </div>
    )
}

export default NotesEdit