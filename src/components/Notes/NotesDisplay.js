import React from 'react'
import { FormControlLabel, Radio } from '@mui/material';
import { RadioGroup } from '@mui/material';

const NotesDisplay = (props) =>{
    return(<div>
        <ul>
            {props.notes.map(note =>(    
                    <li key={note.id}>
                        <h2 >{note.title}</h2>
                        <p>{note.details}</p>
                        <p>{note.category}</p>
                    </li>
            ))}
        </ul>
    </div>)
}

export default NotesDisplay