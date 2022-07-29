import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar(){

    return (<div>
        <nav>
            <h1>navbar</h1>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/lectures-create">Create Lectures</Link>
                </li>
                <li>
                    <Link to="/lectures-display">View Lectures</Link>
                </li>
                <li>
                    <Link to="/quizzes-create">Create Quizzes</Link>
                </li>
                <li>
                    <Link to="/quizzes-display">View Quizzes</Link>
                </li>
                <li>
                    <Link to="/drag-and-drop-create">Create Drag And Drop</Link>
                </li>
            </ul>
        </nav>
    </div>)
}